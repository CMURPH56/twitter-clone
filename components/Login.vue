<template>
  <section>
    <div>
      <form v-on:submit="login">
        <input type="text" name="username" placeholder="UserName">
        <input type="password" name="password" placeholder="Password">
        <input type="submit" value="Login" />
      </form>
    </div>
</section>
</template>
<script>
  import axios from "axios"
  export default {
    methods: {
      login: function(event) {
        event.preventDefault();
        let username = "username"
        let password = "password"
        let login = () => {
          let data = {
            username: username,
            password: password
          }
          console.log(data)
          axios.post("http://localhost:8000/api/login", data)
            .then((response)=> {
              console.log(response)
            })
            .catch((errors) => {
              console.log(errors)
            })
        }
        login()
      }
    }
  }
</script>
