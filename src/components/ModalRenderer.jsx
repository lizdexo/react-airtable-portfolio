import React, { Component } from "react";
import { Card, CloseButton } from "./Library.jsx";
import Airtable from "airtable";
import LoremIpsum from "./Placeholder.jsx";

const base = new Airtable({ apiKey: "key9O0ifLQ0zYDQIt" }).base(
  "appzdAcwHN5xEQO8y"
);

class GalleryModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thisRecord: "",
    };
  }

  componentDidMount = (prevProps, prevState) => {
    //var ugh = this.props.recordID;

    if (this.state.thisRecord !== this.props.title) {
      this.setState({ thisRecord: this.props.title });
      console.log("record currently open:", this.state.thisRecord);
    } else {
      console.log("the same record is still open:", this.state.thisRecord);
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.thisRecord !== this.props.title) {
      //this.setState({ thisRecord: this.props.title });
      console.log("record currently open:", this.state.thisRecord);
    } else {
      console.log(
        "the record hasn't changed, it is still",
        this.state.thisRecord
      );
    }
  };

  render() {
    return (
      <div className="modal-container" onClick={this.props.onClick}>
      <article id="modal" onClick={event => event.stopPropagation()}>
        <header> 
        <h3>{this.props.title}</h3><CloseButton onClick={this.props.onClick} /></header>
       

        <p>{this.props.description}</p>

        <dl className="tags">
          <dt>Tags</dt>
          {this.props.skilltags.length > 0 ? (
            this.props.skilltags.map((tag, index) => <dd>{tag}</dd>)
          ) : (
            <dd>No example available</dd>
          )}

          <dt>Software</dt>

          {this.props.softwaretags.length > 0 ? (
            this.props.softwaretags.map((software, index) => (
              <dd>{software}</dd>
            ))
          ) : (
            <dd>No example available</dd>
          )}
        </dl>

        <section className="gallery-item-tabs">
          <div className="tab-container" id="default-tab-container">
            <input
              type="radio"
              name="item"
              id="defaulttab"
              data-tab="default"
              value={this.props.pics[0].filename}
              defaultChecked={true}
            />
            <label for="defaulttab" className="thumbnail-tab">
              <img className="thumbnail-image" src={this.props.pics[0].url} />
            </label>

            <div class="tab-content" data-tab="default" data-visibility="off">
              <img className="tab-content-pic" src={this.props.pics[0].url} />
              <a href={this.props.pics[0].url} target="_blank" data-link="internal">
                view even larger
              </a>
            </div>
          </div>

          {this.props.pics.length > 0 ? (
            this.props.pics.map((pic, index) => (
              <div className="tab-container" data-tab={"tab" + index} >
                <input
                  type="radio"
                  name="item"
                  id={pic.id}
                  data-tab={"tab" + index}
                  value={pic.filename}
                />
                <label for={pic.id} className="thumbnail-tab">
                  <img className="thumbnail-image" src={pic.url} />
                </label>

                <div
                  class="tab-content"
                  data-tab={"tab" + index}
                  data-visibility="off"
                >
                  <img className="tab-content-pic" src={pic.url} />
                  <a href={pic.url} target="_blank" data-link="internal">
                    view even larger
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p>None</p>
          )}

          <div className="image-holder" data-placeholder="gallery">
           
          </div>
        </section>
        {this.props.children}
      </article>
      </div>
    );
  }
}

export default GalleryModal;
