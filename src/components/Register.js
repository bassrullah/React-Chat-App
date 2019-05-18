import React, { Component } from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
export default class Register extends Component {
  render() {
    return (
      <div>
        <Form>
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
          <Label>lalal</Label>
          <Button>SIGN IN</Button>
        </Form>
      </div>
    )
  }
}
