<template>
  <section class="tweetInputModule">
    <h1> {{newTweet.location }}</h1>
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
        location: 'test'
       }
     }
   },
   mounted(){
     this.getLocation();
   },
   computed: {
     charactersLeft() {
       var char = this.newTweet.message.length
       var limit = 240
       return `${char} / ${limit}`
     }
   },
   methods:{
     getLocation: function(){
       if(!navigator.geolocation){
         this.newTweet.location = 'unknown'
       }
       else{
        navigator.geolocation.getCurrentPosition(this.success, this.error);
       }

     },

      error: function(position) {
        this.newTweet.location = position.message
        console.log(JSON.parse(position))
        // this.newTweet.location = 'unable to retrieve location  '
      },

      success: function(position) {
        this.newTweet.location = 'it worked'
      },

     submitTweet: function(event) {
      event.preventDefault();
      this.findHashTag();
      var temp = JSON.parse(JSON.stringify(this.newTweet));
      this.$store.commit('Tweets/add', temp)
      this.newTweet.message = ''
     },
     findHashTag: function() {
      const message = this.newTweet.message
      const words = message.split(' ')
      const hashTags = words
            .filter( x => x.charAt(0) == '#')
            .map( word => word.toLowerCase())
      this.newTweet.hashTags = hashTags
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
