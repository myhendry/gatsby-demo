import React, { useState, useContext, useEffect } from 'react'

import { Form, Input, Button, MenuAdmin } from '../common'
import { FirebaseContext } from '../../services/Firebase'

const Record = () => {
  const [authorName, setAuthorName] = useState('')
  const { firebase } = useContext(FirebaseContext)
  const [success, setSuccess] = useState(false)
  let isMounted = true

  useEffect(() => {
    return () => {
      isMounted = false
    }
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    firebase
      .createAuthor({
        authorName,
      })
      .then(() => {
        if (isMounted) {
          setAuthorName('')
          setSuccess(true)
        }
      })
  }

  return (
    <>
      <MenuAdmin />
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="author name"
          onChange={e => {
            e.persist()
            setSuccess(false)
            setAuthorName(e.target.value)
          }}
          value={authorName}
        />
        {!!success && <span>Author Created Successfully</span>}
        <Button type="submit" block>
          Add New Author
        </Button>
      </Form>
    </>
  )
}

export default Record
