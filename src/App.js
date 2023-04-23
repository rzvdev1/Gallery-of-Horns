import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import HornedBeastModal from './HornedBeastModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beasts: {},
      showModal: false,
    };
  }

  showHornedBeastModal = () => {
    this.setState({
      showModal: true,
    });
  };

  hideHornedBeastModal = () => {
    this.setState({
      showModal: false,
    });
  };

  selectBeasts = (beastObj) => {
    this.setState({
      beasts: beastObj,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <Main>
          showHornedBeastModal={this.showHornedBeastModal}
          selectBeasts={this.selectBeasts}
        </Main>
        <HornedBeastModal>
          showModal={this.state.showModal}
          hideHornedBeastModal={this.hideHornedBeastModal}
          beast={this.state.beasts}
        </HornedBeastModal>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;

// resource I use
//https://medium.com/@julianajlk/grids-rows-and-columns-in-react-bootstrap-c36a703c3c45
