import React from 'react';
import HornedBeast from './HornedBeast';

import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <div className="beasts">
        {this.props.data.map((item, idx) => (
          <HornedBeast
            title={item.title}
            imgUrl={item.image_url}
            description={item.description}
            beasts={item}
            showHornedBeastModal={this.props.showHornedBeastModal}
            selectBeasts={this.props.selectBeasts}
            key={idx}
          />
        ))}
      </div>
    );
  }
}

export default Main;
