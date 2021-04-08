import React from 'react'
import { getCurrentUser } from '../services/auth.service'

const Profile = () => {
  const currentUser = getCurrentUser()
  const aToken = currentUser.accessToken

  console.log('CURRENT USER: ' + currentUser)
  return (
    <div className='container'>
      <header className='jumbotron'>
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {aToken.substring(0, 20)} ... {aToken.substr(aToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles && currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  )
}

export default Profile
