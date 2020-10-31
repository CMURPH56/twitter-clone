<template>
  <section class="login">
      <h2 class="login__header"> Log in to Twitter </h2>
      <form action="#" @submit.prevent="login">
          <div>
            <input class="login__input" type="email" placeholder="Email" name="username" id="email" v-model="email">
          </div>
          <div class="form-control mb-more">
            <input class="login__input" type="password" placeholder="password" name="password" id="Password" v-model="password">
          </div>
          <div>
            <button class="login__button" type="submit">Login</button>
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
          email: '',
          password: ''
        }
      },
      methods: {
        login() {
          this.$store.dispatch('Users/retrieveToken', {
            email: this.email,
            password: this.password
          })
        }
      }
  }
</script>


<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__header{
    color: black;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  &__button{
    width: 100%;
    background-color: lightblue;
  }
  &__input{
    margin-bottom:1rem;
  }

}

</style>
