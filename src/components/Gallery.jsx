import React, { Component } from "react";
import { Card } from "./Library.jsx";
import Airtable from "airtable";
import GalleryModal from "./Modal2.jsx";
import LazyLoad from "react-lazyload";
import { Spinner, SpinnerCards } from "./Placeholder.jsx";
import Sort from "./Sort.jsx";
import { Route, Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";
//considering adding this: https://reacttraining.com/react-router/web/example/modal-gallery
import ScrollLock from 'react-scroll-lock-component';

const base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY
}).base(process.env.REACT_APP_API_AIRTABLE_BASE_ID);

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: "yer mum",
      recordsInit: [],
      records: [],
      showModal: false,
      showFilter: false,
      selectedRecord: "recdjhA2dqh6P1eIC",
      content: [],
      columns: 3
    };
  }

  
  
  componentDidMount() {
    base("Portfolio")
      .select({ view: "GalleryAPI", fields: ["Name", "Description", "recordID", "Year", "Images", "Cover", "Software", "Tags", "Category"]})
      .eachPage((records, fetchNextPage) => {
        this.setState({ records: records });

        fetchNextPage();
      });
    
   
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.records !== this.state.records) {
      console.log("records initially loaded");
      
      if (prevState.showFilter !== true) {
      this.setState({showFilter: true});
      }
      
    } else {
    }

    if (prevState.content !== this.state.content) {
      console.log("record content loaded:", this.state.content[0]);
    } else {
      console.log("no new content loaded yet");
    }
  }

  handleShow = (record, name, desc, attachments, skilltags, softwaretags) => {
      
    this.setState({ selectedRecord: record });

    const id = record;
    const selectedTitle = name;
    const description = desc;
    const picArray = attachments;
    const skilltagsArray = skilltags;
    const softwaretagsArray = softwaretags;
    const selectedContent = [
      selectedTitle,
      description,
      picArray,
      skilltagsArray,
      softwaretagsArray
    ];
    const prevContent = this.state.content;

    if (prevContent !== selectedContent) {
      this.updateContent(selectedContent);
      console.log("content updated to", id);
    } else {
      console.log("content was not updated");
    }
  };

  updateContent(newContent) {
    const contentToUpdate = newContent;
    this.setState({ content: contentToUpdate });
  }

topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

unBreakColumns = (cols) => {
  console.log(cols);
  this.setState({columns: cols})
}



  render() {
    const breakpointColumnsObj = {
      default: this.state.columns,
      1100: this.state.columns,
      900: 2,
      700: 1
    };

    return (
      <article>
       <h1>Gallery</h1>
        {/*<LazyLoad height={200} offset={500} once>  */}
        {/*</LazyLoad>*/}
        
       {this.state.showFilter == true ? <Sort onFilter={this.unBreakColumns} /> : null} 
        
        
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="gallery-masonry"
          columnClassName="my-masonry-grid_column"
        >
          
          {this.state.records.length > 0 ? (
            this.state.records.map((record, index) => (
              <Card
                key={record.fields["recordID"]}
                id={record.fields["recordID"]}
                category={record.fields["Category"]}
              >
                <figure>
                  <Link
                    to={`/gallery/${record.fields["recordID"]}`}
                    onClick={() =>
                      this.handleShow(
                        record.fields["recordID"],
                        record.fields["Name"],
                        record.fields["Description"],
                        record.fields["Images"],
                        record.fields["Tags"],
                        record.fields["Software"]
                      )
                    }
                    data-link="internal"
                  >
                    <LazyLoad height={325} offset={200}> 
                    <img
                      src={record.fields["Cover"][0].url}
                      alt="project cover"
                    />
                    </LazyLoad>
                    <aside><FontAwesomeIcon icon="images" /> <b>{record.fields["Images"].length}</b></aside>
                   
                  </Link>
                  <figcaption>
                  
                    <h3>{record.fields["Name"]}</h3>

                    <p>
                      <time dateTime={record.fields["Year"]}>
                        {record.fields["Year"]}
                      </time>
                    </p>

                    <dl className="tags">
                      
                      <dt>Tags</dt>
                      {record.fields["Tags"].length > 0 ? (
                        record.fields["Tags"].map((tag, index) => (
                          <dd key={index}>{tag}</dd>
                        ))
                      ) : (
                        <dd>No example available</dd>
                      )}

                      <dt>Software</dt>

                      {record.fields["Software"].length > 0 ? (
                        record.fields["Software"].map((software, index) => (
                          <dd key={index}>{software}</dd>
                        ))
                      ) : (
                        <dd>No example available</dd>
                      )}
                    </dl>
                  </figcaption>
                </figure>

                <div>
                  <Link
                    to={`/gallery/${record.fields["recordID"]}`}
                    onClick={() =>
                      this.handleShow(
                        record.fields["recordID"],
                        record.fields["Name"],
                        record.fields["Description"],
                        record.fields["Images"],
                        record.fields["Tags"],
                        record.fields["Software"]
                      )
                    }
                    className="view-link"
                    data-link="internal"
                  >
                    view details
                  </Link>
                </div>
              </Card>
            ))
          ) : (
            <SpinnerCards />
          )}
        </Masonry>
        
        <Route
          exact
          path="/gallery/:recordID"
          render={props => (
            <ScrollLock>
            <GalleryModal
              {...props}
              recordID={this.state.selectedRecord}
              title={this.state.content[0]}
              description={this.state.content[1]}
              pics={this.state.content[2]}
              skilltags={this.state.content[3]}
              softwaretags={this.state.content[4]}
            />
           </ScrollLock>
          )}
        />
        
        <button className="view-link" id="backtop" onClick={() => this.topFunction()}>back to top</button>
      </article>
    );
  }
}


export default Gallery;

