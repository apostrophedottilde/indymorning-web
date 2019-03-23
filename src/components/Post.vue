<template>
    <div class="card mt-3">
        {{post.text}}
        <comments-list v-bind:post="post"></comments-list>
    </div>
</template>

<script>
    import axios from 'axios'
    import CommentsList from "./CommentsList";

    export default {
        name: "post",
        components: { CommentsList },
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
        methods: {

        }
    }
</script>

<style scoped>

</style>