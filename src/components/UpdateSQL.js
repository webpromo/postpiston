
import axios from 'axios';

export const updateUser = function(info) {
    return dispatch => {
      axios.put(`/api/puts/`,info)
        .then(res => res.data)
        .catch(err => console.error("Wasn't able to update property.", err))
    }
  }