<template>
  <section>
    <h3> Trending </h3>
      <div v-for="hashTag in trendingHashtags" :key="hashTag">
          {{hashTag}}
      </div>
  </section>

</template>

<script>

import Tweet from '~/components/Tweet.vue'

export default {
  data: function () {
    return{

    }
  },
  components: {
    Tweet
  },
  computed: {
    trendingHashtags () {
      let hashtags = []
      var tweets = this.$store.state.Tweets.posts
      for(var i = 0; i < tweets.length; i++){
        for(var j = 0; j < tweets[i]['hashTags'].length; j++){
          hashtags.push(tweets[i]['hashTags'][j])
        }
      }
      return hashtags
    }  
  }
}

</script>
