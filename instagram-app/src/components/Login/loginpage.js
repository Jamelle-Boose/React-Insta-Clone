import React, { Component } from 'react'
// import 'react-bulma-components/dist/react-bulma-components.min.css';
// import { Button, Form, Heading } from 'react-bulma-components/full'
import './login.scss'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleLoginSubmit = event => {
    event.preventDefault()
    const user = this.state.username
    if (user) {
      localStorage.setItem('user', user)
      window.location.reload()
    }
  }

  render() {
    return (
      <form className="login-form">
        {/* <Heading size={3}>Welcome to React Insta Clone</Heading> */}
        <div>Please Login</div>
        <div className="form-group">
          <input
            type="text"
            placeholder="User Name"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <br />
          <button
            className="button"
            color="success"
            size="large"
            onClick={this.handleLoginSubmit}>
            Log In
          </button>
        </div>
      </form>
    )
  }
}

export default Login
