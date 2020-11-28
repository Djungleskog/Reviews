import React from 'react'
import ReviewStars from './ReviewStars.jsx'

const SliderButton = (props) => (

<div classname='OverallDiv'>
  <div classname='ReviewButtonDiv' >
      <button className="btn" onClick={props.toggle}>
        <div classname ='ReviewTextDiv'>
          <div classname='ReviewText'>Reviews</div>
          <ReviewStars value={2.9}/>(100)
        </div>
      </button>
   </div>
</div>


)

export default SliderButton;