import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = ({match, history}) => (
  <div className='boxed-view'>
    <div className='boxed-view__box'>
      <h1>404 not found</h1>
      <p>{match.path}</p>
      <p>{history.location.pathname}</p>
      <Link className='button button--link' to='/'>HEAD HOME</Link>
    </div>
  </div>
)

export default NotFound;
