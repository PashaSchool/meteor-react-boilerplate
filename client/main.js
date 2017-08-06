import {Meteor} from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'
import {Tracker} from 'meteor/tracker'

import {Routes} from '../imports/routes/Routes'




Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  //create session to store reactive data on client, cause
  // checknox toggle on fair :D

  console.log("isAuthenticated", isAuthenticated);
  Meteor.startup(() => {
    ReactDOM.render(Routes(isAuthenticated), document.getElementById('app'))
  })
})
