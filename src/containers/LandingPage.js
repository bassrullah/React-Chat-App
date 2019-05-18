import React, { Component } from 'react'
import Login from '../components/Login.js'
import {Row, Col} from 'reactstrap'
import '../assets/css/style.scss'

export default class LandingPage extends Component {
  render() {
    return (
      <div >
        <Row >
          <Col xs={1} sm={2} md={4}>
          </Col>
          <Col xs={10} sm={8} md={4} className='align-items-center' >
          <Login/>
          </Col>
          <Col xs={1} sm={2} md={4}>
          </Col>
        </Row>
        
      </div>
    )
  }
}
