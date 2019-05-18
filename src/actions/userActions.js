import axios from 'axios'
import history from '../history'
import {USERSIGN_IN} from './type'

const url = "https://relaonebinar.herokuapp.com/api"

export const signIn = (username, password) => {
  return dispatch => {
    axios ({
      url: `${url}/member/login`,
      method: 'post',
      data: {
          username,
          password
      }
    })
      .then(res => {
        console.log(res)
        dispatch({
          type: USERSIGN_IN,
          token: res.data.token
        })
        history.push('/chatapp')
      })
      .catch(err => {
        console.log(err)
      })
  }
}
