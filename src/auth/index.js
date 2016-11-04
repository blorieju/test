import Vue from '../main'
import {router} from '../main'

export default {
    user: {
        authenticated: false,
        profile: null
    },
    check (){
        if(localStorage.getItem('id_token') !== null) {
            Vue.http({
                url: 'user',
                method: 'GET'
            }).then(response => {
                this.user.authenticated = true
                this.user.profile = response.data.data
            })

            router.go({
                'name' : 'home'
            })
        }else{
            router.go({
                'name' : 'auth.signin'
            })
        }
    },
    signin (context, object){
        Vue.http({
            url: 'auth/signin',
            method: 'POST',
            data: {
                email: object.email,
                password: object.password
            }
        }).then(response => {
            context.error = false
            localStorage.setItem('id_token', response.data.meta.token)
            Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')

            this.user.authenticated = true
            this.user.profile = response.data.data

            router.go({
                name: 'home'
            })
        }, response => {
            context.response = response.data
            context.error = true
        })
    },
    signup (context, object) {
        Vue.http({
            url: 'auth/signup',
            method: 'POST',
            data: {
                email : object.email,
                password : object.password,
                first_name : object.firstname,
                last_name: object.lastname,
                mobile: object.mobile,
                address: object.address,
            }
        }).then(responser => {
            context.success = true
        },response => {
            context.response = response.data
            context.error = true
        })
    },
    signout () {
        Vue.http({
            url: 'auth/sigout',
            method: 'GET'
        }).then(response => {
            response.data
        })

        localStorage.removeItem('id_token')
        this.user.authenticated = false
        this.user.profile = null

        router.go({
            'name' : 'home'
        })
    }
}
