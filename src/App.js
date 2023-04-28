import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import HornedBeastModal from './HornedBeastModal';
import data from './data.json';
import { Form } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beasts: {},
      showModal: false,
      data: data,
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

  changeHorn = (e) => {
    e.preventDefault();
    let filterHorn;

    if (e.target.value === 'one') {
      filterHorn = data.filter((horn) => parseInt(horn.horns) === 1);
    } else if (e.target.value === 'two') {
      filterHorn = data.filter((horn) => parseInt(horn.horns) === 2);
    } else if (e.target.value === 'three') {
      filterHorn = data.filter((horn) => parseInt(horn.horns) === 3);
    } else if (e.target.value === 'onehundred') {
      filterHorn = data.filter((horn) => parseInt(horn.horns) === 100);
    } else {
      filterHorn = data;
    }
    this.setState({ data: filterHorn });
  };

  render() {
    return (
      <>
        <Header></Header>
        <Form>
          <Form.Group>
            <Form.Label>Choose Horn</Form.Label>
            <Form.Select onChange={this.changeHorn}>
              <option value="">Open this select menu</option>
              <option value="one">One Horn</option>
              <option value="two">Two Horn</option>
              <option value="three">Three Horn</option>
              <option value="onehundred">One Hundred Horn</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Main
          showHornedBeastModal={this.showHornedBeastModal}
          selectBeasts={this.selectBeasts}
          data={this.state.data}
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
