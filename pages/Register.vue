<template>
  <section class="login">
    <h2 class="login__header"> Create your account</h2>
    <form action="#" @submit.prevent="login">
        <div>
          <input class="login__input" type="email" placeholder="Email" name="email" id="email" v-model="email">
        </div>
        <div>
          <input class="login__input" type="text" placeholder="User Handle" name="username" id="username" v-model="username">
        </div>
        <div class="form-control mb-more">
          <input class="login__input" type="password" placeholder="Password" name="password" id="Password" v-model="password">
        </div>
        <div>
          <button class="login__button" type="submit">Sign Up</button>
        </div>
    </form>
  </section>
</template>

<script>
  import axios from "axios"
  export default {
    auth: false,  
    name: 'login',
      data() {
        return {
          email: '',
          username: '',
          password: '',
        }
      },
      computed: {
        userData() {
          return this.$store.state.Users.result
        },
        userName(){
          return this.$store.state.Users.result.username
        },
        requestStatus(){
          return this.$store.state.Users.status
        }

      },
      methods: {
        login() {
           axios.post('/api/auth/create', {
            user: {
              email: this.email,
              username: this.username,
              password: this.password
            }
          }).then((response) =>
            this.loginSuccessful(response)
          ).catch(() => this.loginFailed())
        },
        loginSuccessful(res){
          if(!res.data.token){
            console.log('no token')
          }
          localStorage.token = res.data.token
          this.$router.push('/')
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
