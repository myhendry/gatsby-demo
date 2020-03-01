import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'

import { Button, Input, ErrorMessage } from '../common'

const CommentForm = styled.form`
  display: flex;
  margin-top: 32px;
  ${Input} {
    margin-right: 8px;
    margin-top: auto;
    margin-bottom: auto;
  }
  ${Button} {
    margin: auto;
  }
`

const CommentListItem = styled.div`
  > strong {
    font-size: 80%;
    color: #666;
  }
  border-bottom: 1px solid #ddd;
  padding: 4px 0;
`

export const BookComments = ({ firebase, bookId }) => {
  const [comments, setComments] = useState([])
  const [formValues, setFormValues] = useState({ commentText: '' })
  const [errorMessage, setErrorMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setFormValues({
      commentText: '',
    })
    firebase.postComment({
      text: formValues.commentText,
      bookId,
    })
  }

  function handleInputChange(e) {
    e.persist()
    setErrorMessage('')
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }))
  }

  useEffect(() => {
    const unsubscribe = firebase.subscribeToBookComments({
      bookId,
      onSnapshot: snapshot => {
        const snapshotComments = []

        snapshot.forEach(doc => {
          snapshotComments.push({
            id: doc.id,
            ...doc.data(),
          })
        })

        setComments(snapshotComments)
      },
    })

    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }, [])

  return (
    <div>
      <CommentForm onSubmit={handleSubmit}>
        <Input
          required
          name="commentText"
          placeholder="Say Something"
          onChange={handleInputChange}
          type="text"
          value={formValues.commentText}
        />
        {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button type="submit">Post Comment</Button>
      </CommentForm>
      {comments.map(comment => (
        <CommentListItem key={comment.id}>
          <strong>
            {comment.username}-
            {moment(comment.dateCreated.toDate()).format('HH:mm Do MMM YYYY')}
          </strong>
          <div>{comment.text}</div>
        </CommentListItem>
      ))}
    </div>
  )
}
