import React from 'react'
import ReviewStars from './ReviewStars.jsx'
import styled from 'styled-components'

const OverallDiv = styled.div`
  min-width: 37.5em
  padding: 0 1.875rem;
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 1.25rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`
const ReviewButtonDiv = styled.div`
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  background: none;
  overflow: hidden;
  border: 0;
  cursor: pointer;
  flex-direction: row;
  padding: 1.25rem 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  min-height: 5.625rem;
  text-decoration: none;
  border-bottom: 1px solid #dfdfdf;
`
const ReviewTextDiv = styled.div`
  text-align: left;
  flex-grow: 1;
`
const ReviewText = styled.div`
  color: #111;
  font-size: .875rem;
  line-height: 1.57143;
  font-weight: 700;
  display: block;
  width: auto;
`


const SliderButton = (props) => (

<OverallDiv>
  <ReviewButtonDiv >
      <button className="btn" onClick={props.toggle}>
        <ReviewTextDiv>
          <ReviewText>Reviews</ReviewText>
          <ReviewStars value={2.9}/>(100)
        </ReviewTextDiv>
      </button>
   </ReviewButtonDiv>
</OverallDiv>


)

export default SliderButton;