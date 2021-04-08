import React, { useState, useEffect } from 'react'

import { getPublicContent } from '../services/user.service'

const Home = () => {
  const [content, setContent] = useState('')

  useEffect(() => {
    getPublicContent().then(
      (res) => {
        setContent(res.data)
      },
      (err) => {
        const _content = (err.response && err.response.data) || err.message || err.toString()

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

export default Home
