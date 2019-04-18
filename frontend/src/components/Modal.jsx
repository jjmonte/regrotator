import React, { Component } from "react";


class Modal extends Component {
  constructor(props) {
    super(props);

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyUp, false);
    document.addEventListener("click", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyUp, false);
    document.removeEventListener("click", this.handleOutsideClick, false);
  }

  handleKeyUp(e) {
    const keys = {
      27: () => {
        e.preventDefault();
        this.props.closeRequest();
        window.removeEventListener("keyup", this.handleKeyUp, false);
      }
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }

  handleOutsideClick(e) {
    if (this.modal !== null || this.modal !== undefined) {
      if (!this.modal.contains(e.target)) {
        this.props.closeRequest();
        document.removeEventListener("click", this.handleOutsideClick, false);
      }
    }
  }

  render() {
    return (
      <div className="overlay">
        <div className="modal-container" ref={node => (this.modal = node)}>
            <button
              type="button"
              className="close-button"
              onClick={this.props.closeRequest}
            >❌</button>
          <div className="modal-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
