import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>this is a h2</h2>
        <img
          className="profile-photo"
          src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
          alt={'Unicorn'}
        />
        <p>this is a p</p>
      </React.Fragment>
    );
  }
}

export default HornedBeast;
