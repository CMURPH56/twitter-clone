import axios from 'axios'


export const state = () => ({
  results: []
})

export const mutations = {
  set_results(state, results) {
    state.Tweets.results =  results
  }
}

export const actions = {
  get_results({commit}){
    axios
      .get('http://localhost:8000/api/tweets')
      .then((response) =>{
        commit('set_results', response.data)
      })  
  }
}
