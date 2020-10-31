import axios from 'axios'

export const actions = {
 
    retrieveToken(context, credentials){
      axios.post('/api/auth/', {
        user: {
          email: credentials.email,
          password: credentials.password
        }
      })
      .then( response => {
        console.log(response)
      })
    }

}
