<template>
  <section>
    <button 
      id="show-modal" @click="showModal = true"> Sign Up</button>
    <button> Log In</button>

    <CreateAccountModal v-if="showModal" @close="showModal = false"/>

  </section>
</template>

<script>

import CreateAccountModal from '~/components/CreateAccountModal.vue'

export default {

  data: function() {
    return {
      showModal: false
    }
  },
  components : {
    CreateAccountModal,
  }
}

</script>
