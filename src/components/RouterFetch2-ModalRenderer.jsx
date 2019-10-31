import React, { Component } from "react";
import { Card, CloseButton } from "./Library.jsx";
import Airtable from "airtable";
import LoremIpsum from "./Placeholder.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useHistory,
  useLocation,
  useParams,
  withRouter
} from "react-router-dom";

const base = new Airtable({ apiKey: "key9O0ifLQ0zYDQIt" }).base(
  "appzdAcwHN5xEQO8y"
);

class GalleryModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalContent: [
        "none", //0
        this.props.title, //1
        this.props.description, //2
        this.props.pics, //3
        this.props.skilltags, //4
        this.props.softwaretags //5
      ],
      currentID: "",
      id: this.props.recordID,
      title: this.props.title,
      description: this.props.description,
      pics: this.props.pics,
      skills: this.props.skilltags,
      software: this.props.softwaretags
    };
  }

  static defaultProps = {
    skilltags: [" "],
    softwaretags: [" "],
    pics: [" "]
  };

  async componentDidMount(props) {
    let paramID = this.props.match.params;
    let thisRecord = paramID.recordID;
    const fetchURL =
      "https://api.airtable.com/v0/appzdAcwHN5xEQO8y/Portfolio/" + thisRecord;


    if (this.props.title !== undefined) {
      console.log("got props from parent for:", this.props.title);
    } else {
      console.log("did not get props from parent");

      const response = await fetch(fetchURL, {
        method: "GET",
        withCredentials: true,
        headers: {
          Authorization: "Bearer key9O0ifLQ0zYDQIt",
          "Content-Type": "application/json"
        }
      });

      const record = await response.json();
   

      this.renderContent(
        thisRecord,
        record.fields["Name"],
        record.fields["Description"],
        record.fields["Attachments"],
        record.fields["Tags"],
        record.fields["Software"]
      );
    }
  }

  renderContent = (id, name, desc, attachments, skilltags, softwaretags) => {
    const thisArray = id;
    const prevContent = this.state.id;

    if (prevContent !== thisArray) {
      this.setState({
        id: id,
        title: name,
        description: desc,
        pics: attachments,
        skills: skilltags,
        software: softwaretags
      });
    } else {
      console.log("well dang");
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log(this.state.title);
  };

  handleBack = e => {
    if (this.props.title !== undefined) {
      let close = this.props.history;
      e.stopPropagation();
      console.log("gonna go back");
      close.goBack();
    } else {
      this.props.history.push("/gallery");
    }
  };

  render() {
    return (
      <div className="modal-container" onClick={this.handleBack}>
        <article id="modal" onClick={event => event.stopPropagation()}>
          <header>
            <h3>{this.state.title}</h3>
            <button className="button-close" onClick={this.handleBack}>
              <FontAwesomeIcon icon="times" />
            </button>
          </header>

          <p>{this.state.description}</p>

          <dl className="tags">
            <dt>Tags</dt>
            {this.state.skills.length > 0 ? (
              this.state.skills.map((tag, index) => <dd>{tag}</dd>)
            ) : (
              <dd>oops, something broke</dd>
            )}

            <dt>Software</dt>

            {this.state.software.length > 0 ? (
              this.state.software.map((software, index) => <dd>{software}</dd>)
            ) : (
              <dd>oops, something broke</dd>
            )}
          </dl>

          <section className="gallery-item-tabs">
            <div className="tab-container" id="default-tab-container">
              <input
                type="radio"
                name="item"
                id="defaulttab"
                data-tab="default"
                value={this.state.pics[0].filename}
                defaultChecked={true}
              />
              <label for="defaulttab" className="thumbnail-tab">
                <img className="thumbnail-image" src={this.state.pics[0].url} />
              </label>

              <div
                className="tab-content"
                data-tab="default"
                data-visibility="off"
              >
                <img className="tab-content-pic" src={this.state.pics[0].url} />
                <a
                  href={this.state.pics[0].url}
                  target="_blank"
                  data-link="internal"
                >
                  view even larger
                </a>
              </div>
            </div>

            {this.state.pics.length > 0 ? (
              this.state.pics.map((pic, index) => (
                <div className="tab-container" data-tab={"tab" + index}>
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

            <div className="image-holder" data-placeholder="gallery"></div>
          </section>
          {this.props.children}
        </article>
      </div>
    );
  }
}

export default GalleryModal;
