<template>
    <div class="alert alert-danger" v-if="error && !success">
        <p>{{ response.message }}</p>
    </div>
    <div class="alert alert-success" v-if="success">
        <p>You can know sign in</p>
    </div>
    <form autocomplete="off" v-on:submit="signup" v-if="!success">
        <div class="form-group" v-bind:class="{ 'has-error' : error && response.first_name }">
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" class="form-control" placeholder="first name" v-model="firstname">
            <span class="help-block" v-if="error && response.first_name">{{ response.first_name }}</span>
        </div>
        <div class="form-group" v-bind:class="{ 'has-error' : error && response.last_name }">
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" class="form-control" placeholder="last name" v-model="lastname">
            <span class="help-block" v-if="error && response.last_name">{{ response.last_name }}</span>
        </div>
        <div class="form-group" v-bind:class="{ 'has-error' : error && response.email }">
            <label for="email">Email</label>
            <input type="email" id="email" class="form-control" placeholder="you@somewhere.com" v-model="email">
            <span class="help-block" v-if="error && response.email">{{ response.email }}</span>
        </div>
        <div class="form-group" v-bind:class="{ 'has-error' : error && response.mobile }">
            <label for="mobile">Mobile</label>
            <input type="text" id="mobile" class="form-control" placeholder="123 4567 789" v-model="mobile">
            <span class="help-block" v-if="error && response.mobile">{{ response.mobile }}</span>
        </div>
        <div class="form-group" v-bind:class="{ 'has-error' : error && response.address }">
            <label for="address">Address</label>
            <input type="text" id="address" class="form-control" placeholder="Address" v-model="address">
            <span class="help-block" v-if="error && response.address">{{ response.address }}</span>
        </div>
        <div class="form-group" v-bind:class="{ 'has-error' : error && response.password }">
            <label for="password">Password</label>
            <input type="password" id="password" class="form-control" placeholder="password" v-model="password">
            <span class="help-block" v-if="error && response.password">{{ response.password }}</span>
        </div>
        <button type="submit" class="btn btn-default">Sign up</button>
    </form>
</template>

<script>
import auth from '../auth'
export default {
    data () {
        return {
            firstname: null,
            lastname: null,
            email: null,
            mobile: null,
            address: null,
            password: null,
            success: false,
            error: false,
            response: null
        }
    },
    methods: {
        signup(e){
            e.preventDefault()
            auth.signup(this, this)
        }
    }
}
</script>
