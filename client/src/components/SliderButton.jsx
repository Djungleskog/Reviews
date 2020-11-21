import React from 'react'
import ReviewStars from './ReviewStars.jsx'

const SliderButton = (props) => (

   <div >
     <div>Reviews</div>
     <button className="btn" onClick={props.toggle}><ReviewStars value={2.9}/>(100)</button>
   </div>

)

export default SliderButton;