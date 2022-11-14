import React from 'react'
import PropTypes from 'prop-types'

function Card({children, reverse}) {

    // const myStyle = {
    //     backgroundColor: reverse?'rgba(0,0,0,0.4)' :"#fff" ,
    //     color: reverse? '#fff': '#000'
    // }

  return (
    <div className={`card ${reverse&& 'reverse'}`}>{children}</div>

//     <div className="card" style={myStyle}>
// {children}
//     </div>
  )
}

Card.defaultProps ={
    reverse: false
}

Card.propTypes={
    reverse: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default Card