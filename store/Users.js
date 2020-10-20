import axios from 'axios'

export const actions = {
 
    retrieveToken(context, credentials){
      axios.post('/api/login', {
        username: credentials.username,
        password: credentials.password
      })
      .then( response => {
        console.log(response)
      })
    }

}
