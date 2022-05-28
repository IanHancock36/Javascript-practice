import axios from 'axios'

const Url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'





axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
  .then(response => {
    // access parsed JSON response data using response.data field
    data = response.data
    console.log(response.data)
    
  })
  .catch(error => {
    if (error.response) {
      //get HTTP error code
      console.log(error.reponse.status)
    } else {
      console.log(error.message)
    }
  })