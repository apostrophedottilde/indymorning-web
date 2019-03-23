<template>
  <div id="app">
    <header-navbar></header-navbar>
    <div class="row">
      <div class="col-3">

      </div>
      <div class="col-6">
        <router-view/>
      </div>
      <div class="col-3">

      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderNavbar from './components/HeaderNavbar'
import LoginPage from './components/LoginPage'
import UserRegistrationPage from './components/UserRegistrationPage'
import BrowseThreadsPage from './components/BrowseThreadsPage'
import PostsList from './components/PostsList'
import Post from './components/Post'
import CommentsList from './components/CommentsList'
import Comment from './components/Comment'

export default {
  name: 'app',
  components: {
    HelloWorld,
    BrowseThreadsPage,
    UserRegistrationPage,
    HeaderNavbar,
    LoginPage,
    PostsList,
    Post,
    CommentsList,
    Comment
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #8da7ff;
  margin-top: 60px;
}
</style>
