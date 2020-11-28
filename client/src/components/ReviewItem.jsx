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

    <div className="ReviewContain">
      <div className="ReviewHead">
        <div className="ReviewHeadStars"> <ReviewStars value={props.review.overall_rating}/></ReviewStars>
        <div className="ReviewDate">{props.review.author}-{props.review.date.slice(0,10)}</div>
      </div>

      <div className="ReviewTitle"> {props.review.title}</div>

      <div className="ReviewDescrip"> {props.review.text}</div>

      <div className="ReviewRecommend" > <p>{showRecommend(props.review.recommended)}</p></div>

      <div className="ReviewBarsDiv">
          <div className="LeftText">Ease of assembly/installation</div>
          <div className="RatingBarDiv">
            <ReviewBar completed={props.review.ease_of_assembly_rating}/>
          </div>
          <div className="RightText">{props.review.ease_of_assembly_rating}</div>
      </div>

      <div className="ReviewBarsDiv">
          <div className="LeftText">Value for money</div>
          <div className="RatingBarDiv">
            <ReviewBar completed={props.review.value_rating}/>
          </div>
          <div className="RightText">{props.review.value_rating}</div>
      </div>

      <div className="ReviewBarsDiv">
          <div className="LeftText">Product quality</div>
          <div className="RatingBarDiv">
            <ReviewBar completed={props.review.quality_rating}/>
          </div>
          <div className="RightText">{props.review.quality_rating}</div>
      </div>

      <div className="ReviewBarsDiv">
          <div className="LeftText">Appearance</div>
          <div className="RatingBarDiv">
            <ReviewBar completed={props.review.appearance_rating}/>
          </div>
          <div className="RightText">{props.review.appearance_rating}</div>
      </div>

      <div className="ReviewBarsDiv">
          <div className="LeftText">Works as expected</div>
          <div className="RatingBarDiv">
            <ReviewBar completed={props.review.works_as_expected_rating}/>
          </div>
          <div className="RightText">{props.review.works_as_expected_rating}</div>
      </div>

    </div>


)

export default ReviewItem;
