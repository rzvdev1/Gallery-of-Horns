import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class HornedBeastModal extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.hideHornedBeastModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beasts}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.image_url} alt={this.props.title}></img>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.props.hideHornedBeastModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default HornedBeastModal;
