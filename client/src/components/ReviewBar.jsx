import React from 'react';

class ReviewBar extends React.Component {

  render() {
    const {completed} = this.props;

    const containerStyles = {
      height: 10,
      width: '10em',
      backgroundColor: "#f5f5f5",
      margin: 5
    }

    const fillerStyles = {
      height: '80%',
      width: `${completed*2}em`,
      backgroundColor: 'black',
    }

    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
        </div>
      </div>
    );
  }
}

export default ReviewBar;

