<template>
  <section class="tweetInputModule">
    <form>
      <textarea 
          v-model="newTweet.message"
          class="inputTweet"
          placeholder="What's on your mind?"
        required>
      </textarea>
      <button v-on:click="submitTweet">Tweet</button>
    </form>
  </section>
</template>

<script>
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
        hashTags: []
       }
     }
   },
   methods:{
     submitTweet: function(event) {
      event.preventDefault();
      this.findHashTag();
      var temp = JSON.parse(JSON.stringify(this.newTweet));
      this.$store.commit('Tweets/add', temp)
      this.newTweet.message = ''
     },
     findHashTag: function(){
      const message = this.newTweet.message
      const words = message.split(' ');
      const hashTags = words.filter( x => x.charAt(0) == '#');
      this.newTweet.hashTags = hashTags
      hashTags.forEach(x => console.log(x))
     }
   }
 } 
</script>

<style>
.tweetInputModule{
  height: 15vh;
  width: 100%;
}
.inputTweet{
  width: 100%;
  height: 10vh;
  resize: none;
}
</style>
