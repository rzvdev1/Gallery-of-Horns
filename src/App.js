import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import HornedBeast from './HornedBeast';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  render() {
    const hornedBeastArr = data.map((item) => (
      <Col lg={3} className="mb-4">
        <HornedBeast
          title={item.title}
          imgUrl={item.image_url}
          description={item.description}
        />
      </Col>
    ));

    return (
      <React.Fragment>
        <Header></Header>

        <main>
          <Container>
            <Row>{hornedBeastArr}</Row>
          </Container>
        </main>
        <Main></Main>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;

// resource I use
//https://medium.com/@julianajlk/grids-rows-and-columns-in-react-bootstrap-c36a703c3c45
