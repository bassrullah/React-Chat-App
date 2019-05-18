import React, { Component } from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import {Link, withRouter} from 'react-router-dom'
import '../assets/css/style.scss'

import {signIn} from '../actions/userActions'
import {connect} from 'react-redux'
// import history from '../history'

class Login extends Component {
  constructor(props){
    super(props)

    this.state = {
      username:'',
      password:''
    }
  }

  onChange = e => this.setState ({ [e.target.name]: e.target.value})

  onSubmit = e => {
    e.preventDefault()

    this.props.signIn(this.state.username, this.state.password)
    this.setState({
      username:'',
      password:''
    })
  }

  render() {
    return (
        <Form className='width' onSubmit={this.onSubmit}>
          <h3>LOGIN</h3>
          <FormGroup>
            <Label>Email</Label>
            <Input 
            onChange={this.onChange}
            value={this.state.username}
            type='text'
            name='username'
            placeholder='Your Email'
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
            onChange={this.onChange}
            value={this.state.password}
            type='password'
            name='password'
            placeholder='Your Password'
            />
          </FormGroup>
          <Label>Register</Label>
          <Button>LOGIN</Button>
        </Form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: (username, password) => {
      dispatch(signIn(username, password))
    }
  }
}

export default connect(null,mapDispatchToProps)(Login)
  