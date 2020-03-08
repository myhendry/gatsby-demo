import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { navigate } from 'gatsby'

import { GET_BOOK_QUERY } from '../../graphql/queries'
import { ADD_BOOK_MUTATION } from '../../graphql/mutations'

const Add = () => {
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [addBook] = useMutation(ADD_BOOK_MUTATION)

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          addBook({
            variables: { title, author },
            refetchQueries: [{ query: GET_BOOK_QUERY }],
          }).then(() => {
            navigate('/app/graph')
          })
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={e => {
            e.persist()
            setTitle(e.target.value)
          }}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          onChange={e => {
            e.persist()
            setAuthor(e.target.value)
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default Add
