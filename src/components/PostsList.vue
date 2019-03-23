<template>
    <div v-if="posts">
        <div v-for="post in posts" v-bind:key="post.id">
            <post v-bind:post="post"></post>
        </div>

        <div class="mt-4">
            <textarea v-model="newPostText"></textarea>
            {{newPostText}}
            <input type="button" class="btn btn-outline-dark" @click="addPost(postsUri, threadId, newPostText)" value="Add post"></input>
        </div>
    </div>
</template>

<script>
    // import store from '../store'
    import axios from 'axios'
    import Post from "./Post"
    const protocol = 'http';
    const host = 'localhost';
    const port = '9001';


    export default {
        name: "posts-list",
        components: { Post },
        data: () => {
            return {
                newPostText: "",
                posts: []
            }
        },
        props: {
            postsUri: String,
            threadId: Number
        },
        created: function () {
            this.fetchPostsForThread(this.postsUri);
        },
        methods: {
            fetchPostsForThread: function (uri) {
                const jwt = this.$cookie.get('jwt');
                axios.get(`${uri}&page=0&size=20`, { headers: { 'Authorization': jwt } })
                    .then(result => {
                        const embedded = result.data._embedded.postResources;
                        if(embedded !== undefined) {
                            embedded.forEach(t => this.posts.push(t));
                        }
                    }, error => {
                        console.error(error)
                    })
            },
            addPost: function(url, threadId, newPostText) {
                const jwt = this.$cookie.get('jwt');
                axios.post(url, {
                    text: newPostText,
                    threadId: threadId,
                }, {headers: {'Authorization': jwt}})
                    .then(result => {
                        this.newPostText = "";
                        this.posts.push(result.data);
                    }, error => {
                        console.error(error)
                    })
            }
        }
    }
</script>

<style scoped>

</style>