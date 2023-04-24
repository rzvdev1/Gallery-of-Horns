import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Emoji from './emoji';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helloCounter: 0,
    };
  }
  incremenLikes = () => {
    this.setState({
      helloCounter: this.state.helloCounter + 1,
    });
  };

  handelModalEvent = () => {
    this.props.selectBeasts(this.props.beasts);
    this.props.showHornedBeastModal();
  };

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src={this.props.imgUrl}
          onClick={this.handelModalEvent}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>{this.state.helloCounter} Favorites</Card.Text>
          <Button
            style={{ width: '75%' }}
            variant="primary"
            onClick={this.incremenLikes}
          >
            Likes <Emoji symbol="❤️️" label="heart" />
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
