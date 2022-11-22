import React, { useContext } from 'react'
import Card from './shared/Card'
import { useState } from "react";
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';
import { useEffect } from 'react';


function FeedbackForm() {
 const {addFeedback, feedbackEdit , updateFeedback } = useContext(FeedbackContext)
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(10)

  useEffect(()=>{
    if(feedbackEdit.edit){
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  },[feedbackEdit])


  function handleTextChange (e){

    if (text===''){
      setBtnDisabled(true)
      setMessage(null)
    } else if(text!==''&& text.trim().length <10){
      setMessage('Text Must Be At Least 10 Characters')
      setBtnDisabled(true)
    }else{
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(e.target.value)
  }

  function handleSubmit(e){ 
    e.preventDefault()
    if (text.trim().length>10){
      const newFeedback={
        text,
        rating,
      }

      if(feedbackEdit.edit===true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      }else {
        addFeedback(newFeedback);
      }

      setText('')
    }

  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
    <RatingSelect select={(rating)=>{setRating(rating)}}/>
        <div className='input-group'>
          <input type="text" value={text} onChange={handleTextChange} placeholder='Write a review' />
          <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm