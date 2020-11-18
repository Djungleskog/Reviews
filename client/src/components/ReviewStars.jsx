import React from 'react';
import StarRatings from 'react-star-ratings';


var ReviewStars = ({value}) => (

  <StarRatings rating={value} starRatedColor="black" starEmptyColor ="#f5f5f5" starDimension="15px" starSpacing="1px" />

)

export default ReviewStars