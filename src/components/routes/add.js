import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const APOLLO_MUTATION = gql`
  mutation ADD_BOOK($title: String!, $author: String!) {
    addBook(title: $title, author: $author)
  }
`

const Add = () => {
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [msg, setMsg] = useState('')
  const [addBook, { data }] = useMutation(APOLLO_MUTATION)

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          addBook({ variables: { title, author } })
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
        <div>
          <span>{msg}</span>
        </div>
      </form>
    </div>
  )
}

export default Add
