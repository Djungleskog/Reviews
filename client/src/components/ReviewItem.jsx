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

    <ReviewContain>
      <ReviewHead>
        <ReviewHeadStars> <ReviewStars value={props.review.overall_rating}/></ReviewHeadStars>
        <ReviewDate>{props.review.author}-{props.review.date.slice(0,10)}</ReviewDate>
      </ReviewHead>

      <ReviewTitle> {props.review.title}</ReviewTitle>

      <ReviewDescrip> {props.review.text}</ReviewDescrip>

      <ReviewRecommend > <p>{showRecommend(props.review.recommended)}</p></ReviewRecommend>

      <ReviewBarsDiv>
          <LeftText>Ease of assembly/installation</LeftText>
          <RatingBarDiv>
            <ReviewBar completed={props.review.ease_of_assembly_rating}/>
          </RatingBarDiv>
          <RightText>{props.review.ease_of_assembly_rating}</RightText>
      </ReviewBarsDiv>

      <ReviewBarsDiv>
          <LeftText>Value for money</LeftText>
          <RatingBarDiv>
            <ReviewBar completed={props.review.value_rating}/>
          </RatingBarDiv>
          <RightText>{props.review.value_rating}</RightText>
      </ReviewBarsDiv>

      <ReviewBarsDiv>
          <LeftText>Product quality</LeftText>
          <RatingBarDiv>
            <ReviewBar completed={props.review.quality_rating}/>
          </RatingBarDiv>
          <RightText>{props.review.quality_rating}</RightText>
      </ReviewBarsDiv>

      <ReviewBarsDiv>
          <LeftText>Appearance</LeftText>
          <RatingBarDiv>
            <ReviewBar completed={props.review.appearance_rating}/>
          </RatingBarDiv>
          <RightText>{props.review.appearance_rating}</RightText>
      </ReviewBarsDiv>

      <ReviewBarsDiv>
          <LeftText>Works as expected</LeftText>
          <RatingBarDiv>
            <ReviewBar completed={props.review.works_as_expected_rating}/>
          </RatingBarDiv>
          <RightText>{props.review.works_as_expected_rating}</RightText>
      </ReviewBarsDiv>

    </ReviewContain>


)

export default ReviewItem;
