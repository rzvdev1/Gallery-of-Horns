import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>{this.props.title}</h2>
        <img src={this.props.imgUrl} alt={this.title} height={250} />
        <p>{this.props.description}</p>
      </React.Fragment>
    );
  }
}

export default HornedBeast;
