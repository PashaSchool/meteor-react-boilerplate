import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Meteor} from 'meteor/meteor'

class LogIn extends Component {
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

    Meteor.loginWithPassword({email}, password, (err) => {
      if(err) {
        this.setState({error: err.reason})
      }else {
        this.setState({error: ''})
      }
    })

  }
  render() {
    let {error} = this.state;
    return (
      <div className='boxed-view'>
        <div className='boxed-view__box'>
          <h1>LogIn page</h1>

          {error ? <p>{error}</p> : undefined}

          <form className='boxed-view__form' onSubmit={this.onSubmit} noValidate>
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

            <button className='button' type='submit'>LogIn</button>
          </form>
          <Link to='/signup'>SignUp</Link>
        </div>
      </div>
    )
  }
}

export default LogIn
