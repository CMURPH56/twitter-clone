import axios from 'axios'

export const state =  () => ({
  result: ''
})

export const mutations = {
  set_result(state, result) {
    state.result = result;
  }
}

export const actions = {
 
    retrieveToken({commit}, credentials){
      axios.post('/api/auth/', {
        user: {
          email: credentials.email,
          username: credentials.username,
          password: credentials.password
        }
      })
      .then((response) => {
        console.log(response)
        commit('set_result', response.data)
      })
    }

}
