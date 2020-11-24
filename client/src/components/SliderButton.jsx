import React from 'react'
import ReviewStars from './ReviewStars.jsx'
import styled from 'styled-components'

const ReviewButtonDiv = styled.div`
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
  color: #484848;
  text-decoration: none;
`
const ReviewText = styled.div`

`
const SliderButton = (props) => (


   <div >
     <div>Reviews</div>
     <div><button className="btn" onClick={props.toggle}><ReviewStars value={2.9}/>(100)</button></div>
   </div>

)

export default SliderButton;