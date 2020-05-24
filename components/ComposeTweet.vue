<template>
  <section class="tweetInputModule">
    <form enctype="multipart/form-data">
      <textarea
          v-model="newTweet.message"
          class="inputTweet"
          placeholder="What's on your mind?"
          maxlength="240"
        required>
      </textarea>
      <div>
        {{ charactersLeft }}
      </div>
      <h1> {{tweetStatus}}</h1>
      <button
        :disabled="newTweet.message.length == 0"
        class='button'
        v-on:click="submitTweet"
        > Tweet
      </button>
    </form>
  </section>
</template>

<script>
 import axios from 'axios'

 export default {
   data: function () {
     return {
       newTweet: {
        id: Date.now(),
        user: "cam",
        handle: "@cam",
        message: '',
        liked: false,
        comments: [],
        hashTags: [],
       },
       tweetStatus: ''
     }
   },
   computed: {
     charactersLeft() {
       var char = this.newTweet.message.length
       var limit = 240
       return `${char} / ${limit}`
     }
   },
   methods:{
     submitTweet: function(event) {
      event.preventDefault();
      this.findHashTag();
      var temp = JSON.parse(JSON.stringify(this.newTweet));
      this.$store.commit('Tweets/add', temp)
      this.saveTweet(temp)
      this.newTweet.message = ''
     },
     findHashTag: function() {
      const message = this.newTweet.message
      const words = message.split(' ')
      const hashTags = words
            .filter( x => x.charAt(0) == '#')
            .map( word => word.toLowerCase())
      this.newTweet.hashTags = hashTags
     },
     saveTweet: function(tweet){
       console.log(tweet)
       axios
        .post('http://localhost:8000/api/tweets', tweet)
        .then(response => (this.tweetStatus = response.data.message))
     }
   }
 }
</script>

<style>
.tweetInputModule{
  height: 17vh;
  width: 100%;
  border: 1px solid rgb(230, 236, 240);
}
.inputTweet{
  width: 100%;
  height: 10vh;
  resize: none;
  border: none;
}
.button{
  background-color: rgb(29, 161, 242);
  padding: 3px;
  text-decoration: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
}
</style>
