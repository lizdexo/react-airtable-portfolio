import React, { Component } from "react";
import Dummy from "dummyjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "./Library.jsx";


const Spinner = props => {
  return (
    <div className="placeholder">
      <FontAwesomeIcon icon="spinner" pulse />
    </div>
  );
};
export { Spinner };


const LittleSpinner = props => {
  return (
    <div className="thumbnail-tab">
      <FontAwesomeIcon icon="spinner" pulse />
    </div>
  );
};
export { LittleSpinner };


class SpinnerCards extends Component {
  constructor(props) {
    super(props);
  }

  loaderCount = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  render() {
    return (
      <div className="placeholder-masonry">
        {this.loaderCount.map((i, index) => (
          <div className="placeholder-card" key={index}>
            <div className="placeholder-card-inner"></div>
          </div>
        ))}
      </div>
    );
  }
}
export { SpinnerCards };


class LoremIpsum extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    Dummy.text(150);

    return (
      <article className="intro">
        <h2>{Dummy.text(3)}</h2>
        <h3>{Dummy.text(5)}</h3>
        <p>{Dummy.text(80)}</p>
      </article>
    );
  }
}

//More header types will be added to this file soon

export default LoremIpsum;
