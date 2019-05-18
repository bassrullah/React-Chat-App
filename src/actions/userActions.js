import axios from 'axios'
import history from '../history'
import {USERSIGN_IN} from './type'

const url = "https://relaonebinar.herokuapp.com/api"

export const signIn = (email, password) => {
  return dispatch => {
    axios ({
      url: `${url}/api/user/login`,
      method: 'post',
      data: {
          email,
          password
      }
    })
      .then(res => {
        dispatch({
          type: USERSIGN_IN,
          token: res.data.token,
          role: res.data.data.role
        })
        history.push('/user/dashboard')
      })
      .catch(err => {
        console.log(err)
      })
  }
}
