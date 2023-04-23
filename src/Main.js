import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import { Container, Row, Col } from 'react-bootstrap';

class Main extends React.Component {
  render() {
    const hornedBeastArr = data.map((item) => (
      <Col lg={3} className="mb-4">
        <HornedBeast
          title={item.title}
          imgUrl={item.image_url}
          description={item.description}
          beasts={item}
          showHornedBeastModal={this.props.showHornedBeastModal}
          selectBeasts={this.props.selectBeasts}
        />
      </Col>
    ));

    return (
      <React.Fragment>
        <Container>
          <Row>{hornedBeastArr}</Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Main;
