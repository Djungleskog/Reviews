import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import Slider from './Slider.jsx';
import SliderButton from './SliderButton.jsx';
import BackSlider from './BackSlider.jsx';
import '../../styles.css'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      reviewsArray: [],
      slideOpen: false
    }
    this.getReviews = this.getReviews.bind(this);
    this.SliderClick = this.SliderClick.bind(this);
    this.BackSliderClick = this.BackSliderClick.bind(this);

  }

  SliderClick() {
    this.setState({
      slideOpen: !this.state.slideOpen
    })
  }

  BackSliderClick() {
    this.setState({
      slideOpen: false
    })
  }
  getReviews(){
    axios.get('/api/reviews')
    .then(res => {
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
    let backdrop;
    if(this.state.slideOpen){
      backdrop = <BackSlider close={this.BackSliderClick}/>;
     }

    return(
      <div>
        <Slider reviews={this.state.reviewsArray} show={this.state.slideOpen}/>
        { backdrop }
        <SliderButton toggle={this.SliderClick}/>
      </div>
    )
  }

}

export default App;