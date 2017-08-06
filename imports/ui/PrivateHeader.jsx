import React, {Component} from 'react'
import {Accounts} from 'meteor/accounts-base'

const PrivateHeader = (props) => {
  let {title} = props;
  return (
    <div className='header'>
      <div className='header__content'>
        <h2 className='header__title'>{title}</h2>
        <button className='button button__link-text' onClick={(e) => Accounts.logout()}>LogOut</button>
      </div>
    </div>
  )
}



export default PrivateHeader;
