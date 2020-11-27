import React from 'react';
import axios from 'axios';
import ReviewStars from './ReviewStars.jsx'
import ReviewBar from './ReviewBar.jsx'
import styled from 'styled-components'

class ReviewAverage extends React.Component {
  constructor(props){
    super(props);
  }

  getOverall(reviews) {
    var sum = 0;
    for (var i = 0; i < reviews.length; i++) {
      sum += reviews[i].overall_rating;
    }
    var result = Math.round(10*(sum / 100))/10;
    return result;
  }

  getValue(reviews){
    var sum = 0;
    for (var i = 0; i < reviews.length; i++) {
      sum += reviews[i].value_rating;
    }
    var result = Math.round(10*(sum / 100))/10;
    return result;
  }

  getQuality(reviews){
    var sum = 0;
    for (var i = 0; i < reviews.length; i++) {
      sum += reviews[i].quality_rating;
    }
    var result = Math.round(10*(sum / 100))/10;
    return result;
  }

  getAppearance(reviews){
    var sum = 0;
    for (var i = 0; i < reviews.length; i++) {
      sum += reviews[i].appearance_rating;
    }
    var result = Math.round(10*(sum / 100))/10;
    return result;
  }

  getAssembly(reviews){
    var sum = 0;
    for (var i = 0; i < reviews.length; i++) {
      sum += reviews[i].ease_of_assembly_rating;
    }
    var result = Math.round(10*(sum / 100))/10;
    return result;
  }

  getExpected(reviews){
    var sum = 0;
    for (var i = 0; i < reviews.length; i++) {
      sum += reviews[i].works_as_expected_rating;
    }
    var result = Math.round(10*(sum / 100))/10;
    return result;
  }

  render(){
    const {reviews} = this.props;

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

    return(
      <DivContain>
        <ScoreStars>
          <ReviewOverall> <p>{this.getOverall(reviews)}</p></ReviewOverall>
          <StarsOverall > <p> <ReviewStars value={this.getOverall(reviews)}/> ({reviews.length})</p></StarsOverall>
        </ScoreStars>
        <AverageTextOverall > Average customer ratings</AverageTextOverall>

        <ReviewItemDiv>
          <LeftText>Overall</LeftText>
          <RatingStarDiv>
            <RatingStars><ReviewStars value={this.getOverall(reviews)}/></RatingStars>
          </RatingStarDiv>
          <RightStarText>{this.getOverall(reviews)}</RightStarText>

        </ReviewItemDiv>

        <ReviewBarsDiv>
          <LeftText>Ease of assembly/installation</LeftText>
          <RatingBarDiv>
            <ReviewBar completed={this.getAssembly(reviews)}/>
          </RatingBarDiv>
          <RightText>{this.getAssembly(reviews)}</RightText>
        </ReviewBarsDiv>

        <ReviewBarsDiv>
          <LeftText>Value for money</LeftText>
          <RatingBarDiv>
            <ReviewBar completed={this.getValue(reviews)}/>
          </RatingBarDiv>
          <RightText>{this.getValue(reviews)}</RightText>
        </ReviewBarsDiv>

        <ReviewBarsDiv>
          <LeftText>Product quality</LeftText>
          <RatingBarDiv>
            <ReviewBar completed={this.getQuality(reviews)}/>
          </RatingBarDiv>
          <RightText>{this.getQuality(reviews)}</RightText>
        </ReviewBarsDiv>

        <ReviewBarsDiv>
          <LeftText>Appearance</LeftText>
          <RatingBarDiv>
            <ReviewBar completed={this.getAppearance(reviews)}/>
          </RatingBarDiv>
          <RightText>{this.getAppearance(reviews)}</RightText>
        </ReviewBarsDiv>

        <ReviewBarsDiv>
          <LeftText>Works as expected</LeftText>
          <RatingBarDiv>
            <ReviewBar completed={this.getExpected(reviews)}/>
          </RatingBarDiv>
          <RightText>{this.getExpected(reviews)}</RightText>
        </ReviewBarsDiv>

    </DivContain>
    )
  }
}

export default ReviewAverage;