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
      <div class="login__links">
        <router-link class="login__link--first" to="Register">Sign up for Twitter</router-link>
        <span class="login__bullet">  - </span>
        <router-link class="login__link" to="Register">Forgot Password</router-link>
      </div>
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
          console.log('login called')
          axios.post('/api/auth/login', {
            user: {
              email: this.email,
              password: this.password,
            }
          }).then((response) => {
            console.log(response)
            if (response.status == 200) {
              localStorage.token = response.data.user.token
              this.$auth.setUser(response.data.user)
              this.$router.push('/')
            } else {
              console.log(response.status)              
              console.log('no user')
            }
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
  font-family: system-ui;

  &__header {
    color: black;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  &__button {
    width: 100%;
  }


  &__input{
    margin-bottom:1rem;
  }

  &__links {
    margin-top: 2rem;
  }

  &__link {
    margin-top: 1rem;
    color:rgb(27, 149, 224);
  }
}

</style>
