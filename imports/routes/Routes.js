import React from 'react'
import {Meteor} from 'meteor/meteor'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Redirect } from 'react-router'

import LogIn from '../ui/Login'
import SignUp from '../ui/SignIn'
import Dashboard from '../ui/Dashboard'
import NotFound from '../ui/NotFound'

export const Routes = function(isAuthenticated){
  return (
    <Router>
      <Switch>

        <Route exact path='/' render={() => (
          isAuthenticated ? (<Redirect to='/dashboard'/>) : (<LogIn/>)
        )} />

        <Route path='/signup' render={() => (
            isAuthenticated ? (<Redirect to='/dashboard'/>) : (<SignUp/>)
          )}
        />

        <Route path='/dashboard'  render={() => (
            isAuthenticated ? (<Dashboard/>) : (<Redirect to='/' />)
          )}
        />

        <Route component={NotFound} />


      </Switch>
    </Router>
  )
}
