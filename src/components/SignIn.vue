<template>
    <div class="alert alert-danger" v-if="error && !success">
        <p v-if="response.message">{{ response.message }}</p>
        <p v-if="!response.message">Could not sign you in with those details</p>
    </div>
    <form autocomplete="off" v-on:submit="signin">
        <div class="form-group" v-bind:class="{ 'has-error' : error && response.email }">
            <label for="email">Email</label>
            <input type="email" id="email" class="form-control" placeholder="you@somewhere.com" v-model="email">
            <span class="help-block" v-if="error && response.email">{{ response.email }}</span>
        </div>
        <div class="form-group" v-bind:class="{ 'has-error' : error && response.password }">
            <label for="password">Password</label>
            <input type="password" id="password" class="form-control" placeholder="password" v-model="password">
            <span class="help-block" v-if="error && response.password">{{ response.password }}</span>
        </div>
        <button type="submit" class="btn btn-default">Sign in</button>
    </form>
</template>

<script>
import auth from '../auth'

export default {
    data() {
        return {
            email: null,
            password: null,
            error: false
        }
    },
    methods: {
        signin(e){
            e.preventDefault()
            auth.signin(this, this)
        }
    }
}
</script>
