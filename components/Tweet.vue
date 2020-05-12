<template>
  <section :v-bind="post.id" class="tweet">
    <div class="name">
      <span class='post-user'>{{post.user}}</span>
      <span class='post-handle'>{{post.handle}}</span>
    </div>
    <div class="message">
      {{post.message}}
    </div>
    <button v-if='post.liked' v-on:click="toggleTweet">unlike</button>
    <button v-else v-on:click="toggleTweet">like</button>
    <button v-on:click="deleteTweet"> Delete </button>
    <button> Comment </button>

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
.tweet {
  border-top: 1px solid rgb(230, 236, 240);
  border-bottom: 1px solid rgb(230, 236, 240);
}
.post-user{
  font-weight: bold;
}
.post-handle{
  color: grey;
}

</style>
