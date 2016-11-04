<template>
    <router-view></router-view>
</template>


<script>
import auth from '../auth'

export default{
    data(){
        return {
            auth: auth
        }
    },
    methods: {
        signout () {
            auth.signout()
        }
    },
    ready () {
        auth.check()
    }
}
</script>
