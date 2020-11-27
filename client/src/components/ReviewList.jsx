import React from "react";
import ReviewItem from './ReviewItem.jsx'
import ReviewAverage from './ReviewAverage.jsx'


var ReviewList = ({reviews}) => (

  <div>
    <ReviewAverage reviews={reviews}/>
    {reviews.map((review) => <ReviewItem review={review} />)}
  </div>
);

export default ReviewList;
