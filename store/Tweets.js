import axios from 'axios'


export const state = () => ({
  results: []
})

export const mutations = {
  set_results(state, results) {
    state.results =  results
  },
  delete_tweet(){
    delete_tweet();
  }
}

export const actions = {
  get_results({commit}){
    axios
      .get('http://localhost:8000/api/tweets')
      .then((response) =>{
        commit('set_results', response.data)
      })  
  },
  delete_tweet({commit}, id){
    axios
      .delete(`http://localhost:8000/api/tweets/${id}`)

  }
}
