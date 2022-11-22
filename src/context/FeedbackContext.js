import { createContext, useState } from "react";
import React from 'react'
import { v4 as uuidv4 } from "uuid";


const FeedbackContext = createContext()

export function FeedbackProvider({children}) {

    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit: false
    })

    const [feedback, setfeedback] = useState([
        {
        id:1,
        text:'this item is feedback item 1',
        rating:10,
    },
        {
        id:2,
        text:'this item is feedback item 2',
        rating:6,
    },
        {
        id:3,
        text:'this item is feedback item 3',
        rating:8,
    },
])

    //Add Feedback Item
  function addFeedback(newFeedback) {
    newFeedback.id = uuidv4()
    setfeedback(prev => [newFeedback, ...prev])
  }

  //Delete Feedback
    function deleteFeedback(id) {
        if (window.confirm('Are you sure?')) {
            setfeedback(feedback.filter((item) => item.id !== id))
        }
      }

      //Update feedback item    
      function updateFeedback (id,upditem) {
        setfeedback(feedback.map((item) => item.id===id?{...item, ...upditem}:item))
      }

        //Sets Item To be Updated
      function editFeedback(item){
        setFeedbackEdit({
            item,
            edit:true
        })
      }
    
  return (
        <FeedbackContext.Provider value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit,
            updateFeedback,
        }}>
            {children}
        </FeedbackContext.Provider>
  )
}

export default FeedbackContext