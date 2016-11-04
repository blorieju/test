import Vue from 'vue'
//========================components
import Home from './components/Home'
import App from './components/App'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import Services from './components/Services'
import ViewProfile from './components/ViewProfile'
import Plans from './components/Plans'

//===========================libraries
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')
Vue.http.options.root = 'http://audit.dev';

export var router = new VueRouter({
    hashbang: false,
    history: true,
    linkActiveClass: "active",
    mode: 'html5'
})
export default Vue

router.map({
    '/': {
        name: 'home',
        component: Home
    },
    '/signin' : {
        name: 'auth.signin',
        component: SignIn
    },
    '/signup' : {
        name: 'auth.signup',
        component: SignUp
    },
    '/profile' : {
        component: Profile
    },
    '/profile/:profileId' : {
        component: ViewProfile
    },
    '/services' : {
        name: 'services',
        component: Services
    },
    '/plans' : {
        name: 'plans',
        component: Plans
    }
})

router.start(App, '#app')
