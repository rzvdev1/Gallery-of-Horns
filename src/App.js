import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
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
      <>
        <Header></Header>
        <Main
          showHornedBeastModal={this.showHornedBeastModal}
          selectBeasts={this.selectBeasts}
        ></Main>
        <HornedBeastModal
          showModal={this.state.showModal}
          hideHornedBeastModal={this.hideHornedBeastModal}
          beasts={this.state.beasts}
        ></HornedBeastModal>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
