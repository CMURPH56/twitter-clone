<template>
  <div class="container">
    <div class="column column-one">
      <SearchBar />
    </div>
    <div class="column column-two">
      <h2> HOME </h2>
      <ComposeTweet />
      <div v-for="post in storedTweets" :key="post.tweet">
        <Tweet 
          v-bind:post="post"
        />
      </div>
    </div>
    <div class="column column-three">
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SearchBar from '~/components/SearchBar.vue'
import Tweet from '~/components/Tweet.vue'
import ComposeTweet from '~/components/ComposeTweet.vue'
import { mapState } from 'vuex'

export default {
  data: function (){
    return {
    }
  },
  computed: {
    storedTweets () {
      return this.$store.state.Tweets.posts
    }  
  },
  components: {
    Logo,
    SearchBar,
    Tweet,
    ComposeTweet
  }
}
</script>

<style>
.container {
  display: flex;
}
.column{
  flex: 1;
}
.column-one {
  order: 3;
}
.column-two {
  order: 1  ;
}
.column-tree {
  order: 2;
}
</style>

