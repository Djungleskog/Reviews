import React from 'react'
import ReviewList from './ReviewList.jsx';
import styled from 'styled-components'

class Slider extends React.Component {

   render(){
      const {reviews} = this.props;

      const ReviewHeader = styled.h1`
         font-size: 1.375rem;
         line-height: 1.45455;
      `;
      const ModalContainer = styled.div`
         padding: 1.875rem 1.875rem 3.125rem;
      `;

       let slideClass = 'side-drawer'
       if(this.props.show) {
         slideClass = 'side-drawer open'
       }
       return(

          <ModalContainer className={slideClass}>
             <ReviewHeader>Reviews</ReviewHeader>
             <ReviewList reviews={reviews}/>
          </ModalContainer>
      )
    }

}

export default Slider;