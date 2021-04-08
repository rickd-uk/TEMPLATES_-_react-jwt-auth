import React, { useState, useEffect } from 'react'

import { getUserBoard } from '../services/user.service'

const BoardUser = () => {
  const [content, setContent] = useState('')

  useEffect(() => {
    getUserBoard().then(
      (res) => {
        setContent(res.data)
      },
      (err) => {
        const _content =
          (err.response && err.response.data && err.response.data.message) ||
          err.message ||
          err.toString()

        setContent(_content)
      },
    )
  }, [])

  return (
    <div className='container'>
      <header className='jumbotron'>
        <h3>{content}</h3>
      </header>
    </div>
  )
}

export default BoardUser
