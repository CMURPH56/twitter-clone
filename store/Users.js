import axios from 'axios'

export const actions = {
 
    retrieveToken(context, credentials){
      axios.post('/api/auth/', {
        email: credentials.username,
        password: credentials.password
      })
      .then( response => {
        console.log(response)
      })
    }

}
