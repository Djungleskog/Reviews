import React from 'react'

class BackSlider extends React.Component {
  render(){
    return(
      <div className="backdrop" onClick={this.props.close} />
    )
  }
}

export default BackSlider