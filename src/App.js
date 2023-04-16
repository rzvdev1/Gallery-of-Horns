import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <div>Hello World!</div>
        <Main></Main>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
