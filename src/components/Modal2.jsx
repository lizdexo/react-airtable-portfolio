import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LazyLoad from "react-lazyload";
import { LittleSpinner } from "./Placeholder.jsx";
import ReactMarkdown from "react-markdown";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

//gonna try this: https://www.w3schools.com/howto/howto_js_quotes_slideshow.asp

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
      software: this.props.softwaretags,
      copyright: this.props.copyright,
      canSwipe: false
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
      "https://api.airtable.com/v0/" + baseID + "/Portfolio/" + thisRecord;

    const auth = "Bearer " + apiKey;
    const header = new Headers({
      "Content-Type": "application/json",
      Authorization: auth
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
        record.fields["Software"],
        record.fields["Copyright"]
      );
    }
  }

  renderContent = (id, name, desc, attachments, skilltags, softwaretags, copyrightbool) => {
    const thisArray = id;
    const prevContent = this.state.id;

    if (prevContent !== thisArray) {
      this.setState({
        id: id,
        title: name,
        description: desc,
        pics: attachments,
        skills: skilltags,
        software: softwaretags,
        copyright: copyrightbool
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
      <div
        className="modal-container"
        id="root-margin"
        onClick={this.handleBack}
      >
        <article id="modal" onClick={event => event.stopPropagation()}>
          <section>
            <header>
              <h3>{this.state.title}</h3>
              <button className="button-close" onClick={this.handleBack}>
                <FontAwesomeIcon icon="times" />
              </button>
            </header>

           <dl className="tags">
              <dt>Tags</dt>
              {this.state.skills.length > 0 ? (
                this.state.skills.map((tag, index) => (
                  <dd key={index}>{tag}</dd>
                ))
              ) : (
                <dd>oops, something broke</dd>
              )}

              <dt></dt>

              {this.state.software.length > 0 ? (
                this.state.software.map((software, index) => (
                  <dd key={index}>{software}</dd>
                ))
              ) : (
                <dd>oops, something broke</dd>
              )}
            </dl>

            
          </section>

          <Carousel
            infiniteLoop={true}
            className="modal-carousel"
            showIndicators={false}
            swipeable={false}
            dynamicHeight={false}
            axis="horizontal"
            transitionTime={0}
          >
            {this.state.pics.length > 0 ? (
              this.state.pics.map((pic, index) => (
                <div key={pic.id}>
                  <img
                    className="carousel-content-pic"
                    src={pic.url}
                    alt={pic.filename}
                  />
                  
                  

                  <a
                    href={pic.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-link="internal"
                  >
                    view larger <FontAwesomeIcon icon="external-link-alt" />
                  </a>
                </div>
              ))
            ) : (
              <LittleSpinner />
            )}
          </Carousel>
          
          {this.state.copyright === true ? (<small id="copyright">&#169; Liz Dudek 2020</small>) : (<details id="nocopyright"><summary><small>Fair Use Statement</small></summary><small>This work was created for an employer who retains copyright or licensing for the content and/or image(s) displayed here. 
              Excerpts are included for the purpose of discussing my skills, experience, and contributions; This should not be seen as an attempt to claim ownership or redistribute the work. Such usage is personal, non-commercial, and non-competitive in accordance with <a href="https://www.law.cornell.edu/uscode/text/17/107" target="_blank" rel="noopener noreferrer">Fair Use</a> provisions.</small></details>)}
          
          <section>
           <ReactMarkdown linkTarget="_blank">
              {this.state.description}
            </ReactMarkdown>
            
            
            
            <button className="view-details-link"
                    data-link="internal" style={{width: '100%'}} onClick={this.handleBack}>Return to gallery</button>
            
          </section>
          
        </article>
      </div>
    );
  }
}

export default GalleryModal;
