<template>
  <section>
    <h3> Trending </h3>
      <div v-for="hashTag in trendingHashtags" :key="hashTag">
          <span class="headline">{{hashTag.content}}</span> 
          {{hashTag.count}} are tweeting about this
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
          var hashTagContent = tweets[i]['hashTags'][j].toLowerCase().replace(/(\r\n|\n|\r)/gm, "");
          if(!hashtags.find( x => x.content == hashTagContent)){
            hashtags.push(
              { 
                content: hashTagContent, 
                count: 1
              });
            }
            else {
              let found = hashtags.find(element => element.content == hashTagContent);
              found.count = found.count + 1;
            }
          }
      }
      hashtags.sort((a,b) => (a.count > b.count) ? -1 : 1 )
      return hashtags
    }  
  }
}

</script>

<style>
.headline{
  font-weight: bold;
}
</style>
