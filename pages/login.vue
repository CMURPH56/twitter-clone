<template>
  <section>
    <button 
      v-on:click="signUpClick"> Sign Up</button>
    <button> Log In</button>

  </section>
</template>

<script>
export default {

  methods: {
    signUpClick: function() {
      console.log('clicked me h')
    }
  }




}

</script>
