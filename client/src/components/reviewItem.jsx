import React from 'react';
import ReviewStars from './ReviewStars.jsx'
import ReviewBar from './ReviewBar.jsx'

var showRecommend = (recommend) => {
  if (recommend === 1) {
    return '✓ Yes, I recommend this product';
  } else {
    return '☓ No, I don\'t recommend this product';
  }
}

const ReviewItem = (props) => (
    <div>
      <div > <ReviewStars value={props.review.overall_rating}/> {props.review.author} {props.review.date.slice(0,10)}</div>
      <div > {props.review.title}</div>
      <div > {props.review.text}</div>
      <div > <p>{showRecommend(props.review.recommended)}</p></div>
      <div ><br></br></div>

      <div >Ease of assembly/installation <ReviewBar completed={props.review.ease_of_assembly_rating}/>{props.review.ease_of_assembly_rating}</div>
      <div >Value for money <ReviewBar completed={props.review.value_rating}/>{props.review.value_rating}</div>
      <div >Product quality <ReviewBar completed={props.review.quality_rating}/>{props.review.quality_rating}</div>
      <div >Appearance <ReviewBar completed={props.review.appearance_rating}/>{props.review.appearance_rating}</div>
      <div >Works as expected <ReviewBar completed={props.review.works_as_expected_rating}/>{props.review.works_as_expected_rating}</div>
      <br></br>
    </div>


)

export default ReviewItem;