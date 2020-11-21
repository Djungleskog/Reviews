import React from 'react'
import ReviewList from './ReviewList.jsx';

class Slider extends React.Component {

   render(){
      const {reviews} = this.props;

       let slideClass = 'side-drawer'
       if(this.props.show) {
         slideClass = 'side-drawer open'
       }
       return(

          <div className={slideClass}>
             <h1>Reviews</h1>
             <ReviewList reviews={reviews}/>
          </div>
      )
    }

}

export default Slider;