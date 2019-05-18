import {USERSIGN_IN} from '../actions/type'

const initialState={
  token:'',
  role:''
}

const user = ( state=initialState, action) => {
  switch (action.type) {
    case USERSIGN_IN:
    localStorage.setItem('token', action.token)
    localStorage.setItem('role', action.role)
    return {
        ...state,
        token: action.token,
        role: action.role
    }
    default:
    return state;
  }
}

export default user
