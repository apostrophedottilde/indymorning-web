<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">indymorning</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <form class="form-inline search-width my-2 my-lg-1">
                <input class="form-control mr-sm-3" type="search" placeholder="Quick search threads..." aria-label="Quick search threads">
                <router-link :to="{ name: 'BrowseThreadsPage', params: { id: 1234 } }">
                    <button class="btn btn-outline-light" @click="searchThreads()">Go</button>
                </router-link>
            </form>

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#"></a>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'LoginPage', params: { id: 1234 } }">Login</router-link>
                    </li>
                    <!--<li class="nav-item">-->
                        <!--<router-link class="nav-link" :to="{ name: 'UserRegistrationPage', params: { id: 1234 } }">Register User</router-link>-->
                    <!--</li>-->
                    <li class="nav-item">
                        <div class="nav-link" v-on:click="logout">Logout</div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'header-navbar',
        data: () => {
            return {}
        },
        methods: {
            logout: function() {
                this.$cookie.delete('jwt');
                this.$router.push('BrowseListingsPage');
            },
            searchThreads: function() {
                this.$router.push('BrowseThreadsPage');
            }
        }
    }
</script>

<style scoped>

</style>