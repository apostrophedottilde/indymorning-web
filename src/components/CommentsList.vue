<template>
    <div >
        <div class="comments-width" v-for="comment in comments" v-bind:key="comment.thisId">
            <comment v-bind:comment="comment"></comment>
        </div>

        <div class="aParent">
            <div>
                <font-awesome-icon icon="comment"/>
            </div>
            <div @click="addComment(post)">Add comment</div>
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
                comments: []
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
            addComment: function(post) {
                const jwt = this.$cookie.get('jwt');
                axios.post(post._links.comments.href, {
                    text: "New comment on post " + post.id,
                    postId: post.id,
                }, {headers: {'Authorization': jwt}})
                    .then(result => {
                        console.log('NEW POST: ' + JSON.stringify(result))
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