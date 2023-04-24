import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class HornedBeastModal extends React.Component {
  render() {
    console.log(this.props.beasts);
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.hideHornedBeastModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beasts.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={this.props.beasts.image_url}
            alt={this.props.beasts.title}
          ></img>
          <p>{this.props.beasts.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="btn btn-primary btn-lg"
            onClick={this.props.hideHornedBeastModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default HornedBeastModal;
