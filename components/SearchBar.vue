<template>
  <section>
    <form>
      <input v-on:keydown.enter.prevent='search' 
            class="searchInput" 
            v-model="searchTerm" 
            placeholder="Search Twitter" required>
    </form>
    <div v-for="post in tweetResults" :key="post.tweet">
      <Tweet
        v-bind:post="post"
      />
    </div>
  </section>
</template>

<script>
import Tweet from '~/components/Tweet.vue'
export default {
  data: function () {
    return {
      searchTerm: '',
      tweetResults: []
    }
  },
  components: {
    Tweet,
  },
  methods: {
    search: function(event){
      event.preventDefault();
      let searchTermLower = this.searchTerm.toLowerCase()
      var hashedSearch = `#${searchTermLower}`
      var results = this.$store.state.Tweets.posts
        .filter(x => x.hashTags.includes(hashedSearch));
      this.tweetResults = results
    }
  }
}
</script>

<style>
.searchInput {
  background-color: rgb(230, 236, 240);
  border-radius: 15px;
  padding: 10px;
  width: 75%;
  line-height: normal;
  font-weight: 400;
}
</style>
