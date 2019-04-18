import React, { Component } from "react";
import Modal from "./Modal";

class ModalOpener extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {

    return (
      <div>
        <button
          type="button"
          className="open-button"
          onClick={() => this.handleToggleModal()}
        >
          {this.props.buttonLabel}
        </button>

        {this.state.showModal && (
          <Modal closeRequest={() => this.handleToggleModal()}>
            {this.props.children}
          </Modal>
        )}
      </div>
    );
  }
}

export default ModalOpener;
