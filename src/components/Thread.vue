<template>
    <div>
        <h2 class="card-title">{{thread.title}}</h2>
        <p class="card-text">{{thread.description}}</p>
        <posts-list class="posts-list" v-bind:threadId="thread.id" v-bind:postsUri="thread._links.posts.href"></posts-list>
    </div>
</template>

<script>
    import axios from 'axios'
    import PostsList from './PostsList'

    export default {
        name: "thread",
        components: { PostsList },
        data: function () {
            return {
                id: '',
                thread: {}
            }
        },
        created() {
            this.id = this.$route.params.threadId;
            this.fetchThread(this.id)
        },
        methods: {
            fetchThread: function(id) {
                const jwt = this.$cookie.get('jwt');
                axios.get(`http://localhost:9001/threads/${id}?page=0&size=20`, {headers: {'Authorization': jwt}})
                    .then(result => {
                        this.thread = result.data;
                    }, error => {
                        console.error(error)
                    })
            }
        }
    }
</script>