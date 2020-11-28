import React from 'react';
import axios from 'axios';
import ReviewStars from './ReviewStars.jsx'
import ReviewBar from './ReviewBar.jsx'

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


    return(
      <div className='DivContain'>
        <div className='ScoreStars'>
          <div className='ReviewOverall'> {this.getOverall(reviews)}</div>
          <div className='StarsOverall'> <ReviewStars value={this.getOverall(reviews)}/> ({reviews.length})</div>
        </div>
        <div className='AverageTextOverall' > Average customer ratings</div>

        <div className='ReviewItemDiv'>
          <div className='LeftText'>Overall</div>
          <div className='RatingStarDiv'>
            <div className='RatingStars'><ReviewStars value={this.getOverall(reviews)}/></div>
          </div>
          <div className='RightStarText'>{this.getOverall(reviews)}</div>
        </div>


        <div className='ReviewBarsDiv'>
          <div className='LeftText'>Ease of assembly/installation</div>
          <div className='RatingBarDiv'>
            <ReviewBar completed={this.getAssembly(reviews)}/>
          </div>
          <div className='RightStarText'>{this.getAssembly(reviews)}</div>
        </div>


        <div className='ReviewBarsDiv'>
          <div className='LeftText'>Value for money</div>
          <div className='RatingBarDiv'>
            <ReviewBar completed={this.getValue(reviews)}/>
          </div>
          <div className='RightStarText'>{this.getValue(reviews)}</div>
        </div>



        <div className='ReviewBarsDiv'>
          <div className='LeftText'>Product quality</div>
          <div className='RatingBarDiv'>
            <ReviewBar completed={this.getQuality(reviews)}/>
          </div>
          <div className='RightStarText'>{this.getQuality(reviews)}</div>
        </div>


        <div className='ReviewBarsDiv'>
          <div className='LeftText'>Appearance</div>
          <div className='RatingBarDiv'>
            <ReviewBar completed={this.getAppearance(reviews)}/>
          </div>
          <div className='RightStarText'>{this.getAppearance(reviews)}</div>
        </div>

        <div className='ReviewBarsDiv'>
          <div className='LeftText'>Works as expected</div>
          <div className='RatingBarDiv'>
            <ReviewBar completed={this.getExpected(reviews)}/>
          </div>
          <div className='RightStarText'>{this.getExpected(reviews)}</div>
        </div>

    </div>
    )
  }
}

export default ReviewAverage;