import React from "react";
import Header from "./components/Header";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedBackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";


//!Stopped on Rating select line 7

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  function deleteFeedback (id){
      if(window.confirm('Are you sure?')){
        setFeedback(feedback.filter((item)=>item.id!==id))
      }
}


  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList handleDelete={deleteFeedback} feedback={feedback}/>
      </div>
    </>
  );
}

export default App;
