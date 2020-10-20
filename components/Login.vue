<template>
  <section>
      <h2> LOGIN </h2>
      <form action="#" @submit.prevent="login">
          <div class="form-control">
            <label for="email"> UserName/Email </label>
            <input type="email" name="username" id="username" class="login-input" v-model="username">
          </div>
          <div class="form-control mb-more">
            <label for="password"> Password </label>
            <input type="password" name="password" id="password" class="login-input" v-model="password">
          </div>
          <div class="form-control">
            <button type="submit" class="btn-submit">Login</button>
          </div>
      </form>
</section>
</template>
<script>
  import axios from "axios"
  export default {
    name: 'login',
            
      data() {
        return {
          username: '',
          password: ''
        }
      },
      methods: {
        login() {
          this.$store.dispatch('Users/retrieveToken', {
            username: this.username,
            password: this.password
          })
        }
      }
  }
</script>
