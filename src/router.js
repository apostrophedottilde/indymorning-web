import Vue from 'vue'
import Router from 'vue-router'
import BrowseThreadsPage from './components/BrowseThreadsPage'
import UserRegistrationPage from './components/UserRegistrationPage'
import LoginPage from './components/LoginPage'
import Thread from './components/Thread'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: BrowseThreadsPage
        },
        {
            path: '/login',
            name: 'LoginPage',
            component: LoginPage
        },
        {
            path: '/user-registration',
            name: 'UserRegistrationPage',
            component: UserRegistrationPage
        },
        {
            path: '/threads/:threadId',
            name: 'Thread',
            component: Thread,
            props: true
        },
        {
            path: '/threads',
            name: 'BrowseThreadsPage',
            component: BrowseThreadsPage
        }
    ]
})
