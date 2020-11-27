import React from 'react';
import ReviewStars from './ReviewStars.jsx'
import ReviewBar from './ReviewBar.jsx'
import styled from 'styled-components'

var showRecommend = (recommend) => {
  if (recommend === 1) {
    return '✓ Yes, I recommend this product';
  } else {
    return '☓ No, I don\'t recommend this product';
  }
}
const ReviewContain = styled.div`
  border-top: 1px solid #dfdfdf;
  padding-top: 1.875rem;
  margin-bottom: 1.875rem;
`;
const ReviewHead = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.875rem;`;
const ReviewDate = styled.div`
  text-align: left;
  font-size: .75rem;
`;
const ReviewHeadStars = styled.div`
  argin: 0;
  padding: 0;
`;
const ReviewTitle = styled.div`
  font-weight: 700;
  padding-bottom: .625rem;
  text-align: left;
`;
const ReviewDescrip = styled.div`
  margin-bottom: 1.875rem;
`;
const ReviewRecommend = styled.div`
  display: flex;
  padding-bottom: 1.875rem;
  font-size: .75rem;
`;


const ReviewOverall = styled.div`
font-size: 2.25rem;
line-height: 1.33333;
letter-spacing: -.04rem;
font-weight: bold;
`;
const StarsOverall = styled.div`
display: flex;
align-items: center;
line-height: normal;
font-size: .75rem;
color: #484848;
position: relative;
box-sizing: inherit;
outline: none;
`;
const AverageTextOverall = styled.div`
font-size: .875rem;
font-weight: 700;
margin-bottom: 1.875rem;
`;
const ScoreStars = styled.div`
margin: 0;
padding: 0;
margin-bottom: 2.5rem;
`;

const RatingStarDiv = styled.div`
width: 100%;
padding: 0 1.25rem;
`;
const RatingStars = styled.div`
white-space: nowrap;
line-height: .83333;
`;
const LeftText = styled.div`
min-width: 57%;
text-align: left;
`;
const RightStarText = styled.div`
text-align: center;
left: 10px;
`;
const RightText = styled.div`
text-align: right;
`;
const ReviewItemDiv = styled.div`
display: flex;
align-items: center;
padding-bottom: .625rem;
text-align: left;
`;
const DivContain = styled.div`
margin: 0;
padding: 0;
`;
const ReviewBarsDiv = styled.div`
display: flex;
align-items: center;
padding-bottom: .625rem;
`;
const RatingBarDiv = styled.div`
width: 100%;
padding: 0 1rem;
text-align: left;
`;
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
