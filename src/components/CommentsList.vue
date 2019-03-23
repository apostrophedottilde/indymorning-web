<template>
    <div >
        <div class="comments-width" v-for="comment in comments" v-bind:key="comment.thisId">
            <comment v-bind:comment="comment"></comment>
        </div>

        <div>
            <div class="aParent" v-if="!isAddCommentSelected">
                <div>
                    <font-awesome-icon icon="comment"/>
                </div>
                <div @click="selectAddComment(post)">Add comment</div>
            </div>
            <h1 v-else>
                <input type="text" v-model="newCommentText" value="Comment text..."/>
                <button class="btn btn-outline-dark" @click="addComment(post, newCommentText)">Comment</button>
            </h1>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Comment from './Comment'

    export default {
        name: "comments-list",
        components: { Comment },
        data: () => {
            return {
                newCommentText: "",
                comments: [],
                isAddCommentSelected: false
            }
        },
        props: {
            post: {
                text: String,
                _links: {
                    comments: {
                        href: String
                    }
                }
            }
        },
        created: function () {
            this.fetchCommentsForPost(this.post._links.comments.href);
        },
        methods: {
            fetchCommentsForPost: function (commentsURI) {
                const jwt = this.$cookie.get('jwt');
                axios.get(`${commentsURI}&page=0&size=20`, { headers: { 'Authorization': jwt } })
                    .then(result => {
                        const embedded = result.data._embedded;
                        if(embedded !== undefined) {
                            embedded.commentResources.forEach(t => this.comments.push(t));
                        }
                    }, error => {
                        console.error(error)
                    })
            },
            selectAddComment: function() {
               this.isAddCommentSelected = true;
            },
            addComment: function(post, comment) {
                const jwt = this.$cookie.get('jwt');
                axios.post(post._links.comments.href, {
                    text: comment,
                    postId: post.id,
                }, {headers: {'Authorization': jwt}})
                    .then(result => {
                        console.log('NEW POST: ' + JSON.stringify(result));
                        this.newCommentText = "";
                        this.isAddCommentSelected = false;
                        this.comments.push(result.data);
                    }, error => {
                        console.error(error)
                    })
            }
        }
    }
</script>

<style scoped>
    .comments-width {
        padding-left: 3em;
        padding-right: 3em;
    }


</style>