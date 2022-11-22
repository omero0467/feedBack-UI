import React, { useContext } from "react";
// import { useState } from "react";
import Card from "./shared/Card";
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";


function FeedBackItem({ item }) {

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState("example State");

  return (
    <Card >
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={()=>{deleteFeedback(item.id)}}>
        <FaTimes color='purple'></FaTimes>
      </button>
      <button onClick={()=>{editFeedback(item)}} className="edit">
        <FaEdit color='purple'/>
      </button>
      <div className="text-display">{item.text}</div>
 </Card>
  );
}

FeedBackItem.propTypes ={
    item: PropTypes.object
}

export default FeedBackItem;
