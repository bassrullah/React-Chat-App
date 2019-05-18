import React, { Component } from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import '../assets/css/style.scss'

export default class Login extends Component {
  render() {
    return (
        <Form className='width'>
          <h3>LOGIN</h3>
          <FormGroup>
            <Label>Email</Label>
            <Input 
            type='text'
            name='email'
            placeholder='Your Email'
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
            type='text'
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
