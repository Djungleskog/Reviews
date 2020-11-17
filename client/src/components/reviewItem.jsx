import React from 'react';

var showRecommend = (recommend) => {
  if (recommend === 1) {
    return '✓ Yes, I recommend this product';
  } else {
    return '☓ No, I don\'t recommend this product';
  }
}

const ReviewItem = (props) => (
    <div>
      <div > {props.review.author} {props.review.date.slice(0,10)}</div>
      <div > {props.review.title}</div>
      <div > {props.review.text}</div>
      <div > <p>{showRecommend(props.review.recommended)}</p></div>
      <div ><br></br></div>

      <div >Ease of assembly/installation {props.review.ease_of_assembly_rating}</div>
      <div >Value for money {props.review.value_rating}</div>
      <div >Product quality {props.review.quality_rating}</div>
      <div >Appearance {props.review.appearance_rating}</div>
      <div >Works as expected {props.review.works_as_expected_rating}</div>
      <br></br>
    </div>


)

export default ReviewItem;