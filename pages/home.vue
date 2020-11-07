<template>
  <div class="container">
    <div class="column column-one">
      <SearchBar />
      <Trending />
    </div>
    <div class="column column-two">
      <h2> Home </h2>
      <ComposeTweet />
      <div class="tweets" >
        <div v-for="post in storedTweets" :key="post.tweet">
          <Tweet
            v-bind:post="post"
          />
        </div>
      </div>
    </div>
    <div class="column column-three">
      <img class="twitter-image" src="~/assets/twitter.png">
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SearchBar from '~/components/SearchBar.vue'
import Tweet from '~/components/Tweet.vue'
import ComposeTweet from '~/components/ComposeTweet.vue'
import Trending from '~/components/Trending.vue'
import { mapState } from 'vuex'


export default {
  created() {
      this.$store.dispatch('Tweets/get_results')
      this.checkLoggedIn()
    },

  computed : {
    storedTweets() {
      return this.$store.state.Tweets.results
    }
  },
  methods: {
    checkLoggedIn() {
      if( localStorage && localStorage.token){
        alert('we have user')
      }
    }
  },
  components: {
    Logo,
    SearchBar,
    Tweet,
    ComposeTweet,
    Trending
  }
}
</script>

<style>
.tweets{
  border-top: 0.5em solid rgb(230, 236, 240);
  border-bottom: 0.5em solid rgb(230, 236, 240);
}
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
  border-left: 1px solid rgb(230, 236, 240);
  border-right: 1px solid rgb(230, 236, 240);
  order: 1  ;
}
.column-tree {
  border-left: 1px solid rgb(230, 236, 240);
  border-right: 1px solid rgb(230, 236, 240);
  order: 2;
}
.twitter-image {
  margin-top: 5px;
  margin-left: 33%;
  height: 30px;
  width: 30px;
}
</style>

