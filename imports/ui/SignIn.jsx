import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Accounts} from 'meteor/accounts-base'

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ''
    }
  }

  onSubmit = (event) => {
    event.preventDefault();

    let email = this.email.value.trim();
    let password = this.password.value;

    if(password.length < 9) {
      return this.setState({error: "The password must be greater that 8 characters long"})
    }

    Accounts.createUser({
      email,
      password
    }, (err) => {
      if(err) {
        this.setState({ error: err.reason})
      } else {
        this.setState({error: ''})
      }
    })

  }

  render() {
    let {error} = this.state;
    return (
      <div className='boxed-view'>
        <div className='boxed-view__box'>
          <h1>Sign UP</h1>
          {error ? <p>{error}</p> : undefined}
          <form lassName='boxed-view__form' onSubmit={this.onSubmit} noValidate>
            <input
              type='email'
              name='email'
              placeholder='Email'
              ref={email => this.email = email}
              />

            <input
              type='password'
              name='password'
              placeholder='password'
              ref={password => this.password = password}
              />

            <button className='button' type='submit'>Create account</button>
          </form>
          <Link to='/'>Have already account ?</Link>
        </div>
      </div>
    )
  }
}
