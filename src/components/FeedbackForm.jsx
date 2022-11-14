import React from 'react'
import Card from './shared/Card'
import { useState } from "react";
import Button from './shared/Button';
import RatingSelect from './RatingSelect';


function FeedbackForm() {

  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(10)


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

  return (
    <Card>
      <form action="">
        <h2>How would you rate your service with us?</h2>

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