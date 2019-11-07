import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LazyLoad from "react-lazyload";
import { LittleSpinner } from "./Placeholder.jsx";
import ReactMarkdown from 'react-markdown';




class GalleryModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
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
    
    const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY;
    const baseID = process.env.REACT_APP_API_AIRTABLE_BASE_ID;
    
    const fetchURL =
      "https://api.airtable.com/v0/"+ baseID + "/Portfolio/" + thisRecord;
    
    const auth = "Bearer " + apiKey;    
    const header = new Headers({
  'Content-Type': "application/json",
  'Authorization': auth
});

    if (this.props.title !== undefined) {
      console.log("got props from parent for:", this.props.title);
    } else {
      console.log("did not get props from parent");

      const response = await fetch(fetchURL, {
        method: "GET",
        withCredentials: true,
        headers: header
      });

      const record = await response.json();
   

      this.renderContent(
        thisRecord,
        record.fields["Name"],
        record.fields["Description"],
        record.fields["Images"],
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
               <ReactMarkdown linkTarget="_blank">
         {this.state.description}
          </ReactMarkdown>
          <dl className="tags">
            <dt>Tags</dt>
            {this.state.skills.length > 0 ? (
              this.state.skills.map((tag, index) => <dd key={index}>{tag}</dd>)
            ) : (
              <dd>oops, something broke</dd>
            )}

            <dt>Software</dt>

            {this.state.software.length > 0 ? (
              this.state.software.map((software, index) => <dd key={index}>{software}</dd>)
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
              <label htmlFor="defaulttab" className="thumbnail-tab">
              
                <img className="thumbnail-image" src={this.state.pics[0].url} alt={this.state.pics[0].filename} />
              
              </label>

              <div
                className="tab-content"
                data-tab="default"
                data-visibility="off"
              >
                
                <img className="tab-content-pic" src={this.state.pics[0].url} alt={"Item 0: " + this.state.pics[0].filename} />
               
                <a
                  href={this.state.pics[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-link="internal"
                >
                  view even larger
                </a>
              </div>
            </div>

            {this.state.pics.length > 0 ? (
              this.state.pics.map((pic, index) => (
                <div className="tab-container" data-tab={"tab" + index} key={pic.id}>
                  <input
                    type="radio"
                    name="item"
                    alt={"Item " + index + ": " + pic.filename} 
                    id={pic.id}
                    data-tab={"tab" + index}
                    value={pic.filename}
                  />
                  <label htmlFor={pic.id} className="thumbnail-tab">
                    
                    <img className="thumbnail-image" src={pic.url} alt={"Item " + index + ": " + pic.filename} />
               
                  </label>

                  <div
                    className="tab-content"
                    data-tab={"tab" + index}
                    data-visibility="off"
                  >
                    
                    <img className="tab-content-pic" src={pic.url} alt={pic.filename} />
              
                    <a href={pic.url} target="_blank" rel="noopener noreferrer" data-link="internal">
                      <FontAwesomeIcon icon="external-link-alt" /> view even larger
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <LittleSpinner />
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
