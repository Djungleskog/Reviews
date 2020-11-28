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
      <div classname='DivContain'>
        <div classname='ScoreStars'>
          <div classname='ReviewOverall'> <p>{this.getOverall(reviews)}</p></div>
          <div classname='StarsOverall'> <p> <ReviewStars value={this.getOverall(reviews)}/> ({reviews.length})</p></div>
        </div>
        <div classname='AverageTextOverall' > Average customer ratings</div>

        <div classname='ReviewItemDiv'>
          <div classname='LeftText'>Overall</div>
          <div classname='RatingStarDiv'>
            <div classname='RatingStars'><ReviewStars value={this.getOverall(reviews)}/></div>
          </div>
          <div classname='RightStarText'>{this.getOverall(reviews)}</div>
        </div>


        <div classname='RevireBarsDiv'>
          <div classname='LeftText'>Ease of assembly/installation</div>
          <div classname='RatingStarDiv'>
            <div classname='RatingStars'><ReviewStars value={this.getAssembly(reviews)}/></div>
          </div>
          <div classname='RightStarText'>{this.getAssembly(reviews)}</div>
        </div>


        <div classname='RevireBarsDiv'>
          <div classname='LeftText'>Value for money</div>
          <div classname='RatingStarDiv'>
            <div classname='RatingStars'><ReviewStars value={this.getValue(reviews)}/></div>
          </div>
          <div classname='RightStarText'>{this.getValue(reviews)}</div>
        </div>



        <div classname='RevireBarsDiv'>
          <div classname='LeftText'>Product quality</div>
          <div classname='RatingStarDiv'>
            <div classname='RatingStars'><ReviewStars value={this.getQuality(reviews)}/></div>
          </div>
          <div classname='RightStarText'>{this.getQuality(reviews)}</div>
        </div>


        <div classname='RevireBarsDiv'>
          <div classname='LeftText'>Appearance</div>
          <div classname='RatingStarDiv'>
            <div classname='RatingStars'><ReviewStars value={this.getAppearance(reviews)}/></div>
          </div>
          <div classname='RightStarText'>{this.getAppearance(reviews)}</div>
        </div>

        <div classname='RevireBarsDiv'>
          <div classname='LeftText'>Works as expected</div>
          <div classname='RatingStarDiv'>
            <div classname='RatingStars'><ReviewStars value={this.getExpected(reviews)}/></div>
          </div>
          <div classname='RightStarText'>{this.getExpected(reviews)}</div>
        </div>

    </div>
    )
  }
}

export default ReviewAverage;