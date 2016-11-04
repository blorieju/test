<template>
<!--header begin-->
<header>
  <div class="bigcontainer">
    <div id="logo">
      <a v-link="{ name: 'home' }">HOME</a>
    </div>
    <div class="user" v-if="auth.user.authenticated">
      <div class="ui simple dropdown item">
       <!-- <img class="ui avatar image" src="/static/assets/images/avatar-default.gif"> -->
        <img class="ui avatar image" v-bind:src="auth.user.profile.avatar">
            Welcome {{ auth.user.profile.profile_info.first_name + ' ' + auth.user.profile.profile_info.last_name }}!
        <i class="dropdown icon"></i>
          <div class="menu">
            <a class="item" href="#" v-on:click="signout"><i class="sign out icon"></i>logout</a>
          </div>
      </div>
    </div>
  </div>
</header>
<!-- the main menu-->
<div class="ui teal inverted menu">
  <div class="bigcontainer">
    <div class="left menu">
    <a class="active item" href="#" v-if="!auth.user.authenticated"><i class="home icon"></i>Properties</a>
    </div>
    <div class="right menu">
      <a class="item" v-link="{ name: 'home' }" v-if="auth.user.authenticated"><i class="home icon"></i>Home</a>
      <a class="item" v-link="{ name: 'plans' }" v-if="auth.user.authenticated"><i class="sitemap icon"></i>Plans</a>
      <a class="item" href="#" v-if="auth.user.authenticated"><i class="user icon"></i>Account</a>
      <a class="item" v-link="{ name: 'auth.signin' }" v-if="!auth.user.authenticated"><i class="check icon"></i>Sign in</a>
      <a class="item" v-link="{ name: 'auth.signup' }" v-if="!auth.user.authenticated"><i class="pencil icon"></i>Sign up</a>
    </div>
  </div>
</div>

<!--the main content begin-->
  <div class="container">
  <!--the content-->
    <router-view></router-view>
</div>
<!--footer begin-->
<footer>
  <div id="copyrights">
    <div class="inset">
      <div class="bigcontainer">
        <div class="fl">
          <div class="logo"></div>
          <p>&copy; 2016 Aduit</p>
        </div>
      </div>
    </div>
  </div>
</footer>
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
