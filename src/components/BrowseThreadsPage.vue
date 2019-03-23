<template>
    <div>
        <div class="card" v-for="thread in threads" v-bind:key="thread.id">
            <div @click="switchToSingleThreadView(thread.id)">
                <h5 class="card-title">{{thread.title}}</h5>
                <p class="card-text">{{thread.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    // import store from '../store'
    import axios from 'axios'
    import PostsList from "./PostsList"
    const protocol = 'http';
    const host = 'localhost';
    const port = '9001';


    export default {
        name: "browse-threads-page",
        components: { PostsList },
        data: () => {
            return {
                blag: '',
                threads: [],
                selectedThread: ''
            }
        },
        created: function () {
            this.fetchThreads();
        },
        methods: {
            fetchThreads: function() {
                const jwt = this.$cookie.get('jwt');
                console.log(jwt);
                axios.get('http://localhost:9001/threads?page=0&size=20', { headers: { 'Authorization': jwt } })
                    .then(result => {
                        result.data._embedded.threadResources.forEach(t => this.threads.push(t));
                    }, error => {
                        console.error(error)
                    })
            },
            switchToSingleThreadView: function(threadId) {
                console.log('threadUri: ' + threadId);
                this.$router.push({ name: 'Thread', params: { threadId }})
            }
        }
    }
</script>

<style scoped>
    .posts-list {
        padding-left: 20px;
        max-width: 56em;
    }
</style>