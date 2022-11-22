import React, { Component } from "react";

class Loading extends Component {
  render() {
    return (
      <div className="loading d-flex justify-content-center mt-5">
        <div className="rounded-circle"></div>
        <div className="rounded-circle"></div>
        <div className="rounded-circle"></div>
        <div className="rounded-circle"></div>
      </div>
    );
  }
}

export default Loading;
