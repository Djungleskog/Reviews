import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      reviewsArray: []
    }
    this.getReviews = this.getReviews.bind(this);

  }


  getReviews(){
    axios.get('/api/reviews')
    .then(res => {
      console.log('Reviews: ',res.data);
      this.setState({
        reviewsArray: res.data
      });
    })
    .catch(err => console.log('Couldn\'t GET reviews', err))
  }

  componentDidMount() {
    this.getReviews();
  }

  render(){
    return(
      <div>
        <h1>Reviews</h1>
        <ReviewList reviews={this.state.reviewsArray}/>
      </div>
    )
  }

}

export default App;