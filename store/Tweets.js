export const state = () => ({
  posts:[
    {
      id: '1000',
      user: "cam",
      handle: "@cam",
      message: "Hello World",
      liked: false 
    }
  ]
})

export const mutations = {
   add (state, post){
    state.posts.push(
      post
    )
   },
   updateLike(state, id) {
      var post = state.posts.find(element => element.id == id);
      post.liked = post.liked ? false : true
   }
}
