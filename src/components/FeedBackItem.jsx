import React from "react";
import { useState } from "react";
import Card from "./shared/Card";
import PropTypes from 'prop-types'
import { FaTimes } from "react-icons/fa";


function FeedBackItem({ item,handleDelete }) {

  const [rating, setRating] = useState(7);
  const [text, setText] = useState("example State");

  return (
    <Card >
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={()=>{handleDelete(item.id)}}>
        <FaTimes color='purple'></FaTimes>
      </button>
      <div className="text-display">{item.text}</div>
 </Card>
  );
}

FeedBackItem.propTypes ={
    item: PropTypes.object
}

export default FeedBackItem;
