<template>
  <section :v-bind="post.id" class="tweet">
    <div class="name">
      {{post.user}}
      {{post.handle}}
    </div>
    <div class="message">
      {{post.message}}
    </div>
    <button v-if='post.liked' v-on:click="toggleTweet">unlike</button>
    <button v-else v-on:click="toggleTweet">like</button>
    <button v-on:click="deleteTweet"> Delete </button>

  </section>
</template>
<script>
export default {
  data: function() {
    return {

    }
  },
  props: ['post'],
  methods:{
    toggleTweet: function(event) {
      this.$store.commit('Tweets/updateLike', this.post.id)
    },
    deleteTweet: function(event){
      this.$store.commit('Tweets/deleteTweet', this.post.id)
    }
  }
}

</script>

<style>
.tweet{
  border: 1px solid grey;
}

</style>
