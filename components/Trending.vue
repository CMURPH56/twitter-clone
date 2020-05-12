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
      let hashtags = ['#walnut']

      return hashtags
    }  
  }
}

</script>
