import SimpleSchema from 'simpl-schema'
import {Meteor} from 'meteor/meteor'
import {Accounts} from 'meteor/accounts-base'

Accounts.validateNewUser((user) => {
  try{
    new SimpleSchema {
      email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
      }
    }.validate({email})
  }
  catch(e) {
    throw new Meteor.Error('invalid message')
  }
  return true
})
