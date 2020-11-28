import React from 'react'
import ReviewStars from './ReviewStars.jsx'

const SliderButton = (props) => (

<div className='OverallDiv'>
  <div className='ReviewButtonDiv' >
      <button className="btn" onClick={props.toggle}>
        <div className ='ReviewTextDiv'>
          <div className='ReviewText'>Reviews</div>
          <ReviewStars value={2.9}/>(100)
        </div>
      </button>
   </div>
</div>


)

export default SliderButton;