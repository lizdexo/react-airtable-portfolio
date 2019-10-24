import React, { Component } from "react";
import { Card } from "./Library.jsx";
import Airtable from "airtable";
import GalleryModal from "./ModalRenderer.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LazyLoad from 'react-lazyload';
import { Spinner, SpinnerCards } from './Placeholder.jsx';

//need to add this: https://reacttraining.com/react-router/web/example/modal-gallery

const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY }).base(
  process.env.REACT_APP_API_AIRTABLE_BASE_ID
);


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: "yer mum",
      recordsInit: [],
      records: [],
      showModal: false,
      selectedRecord: "recdjhA2dqh6P1eIC",
      content: [],
      columns: ''
    };
  }

  componentDidMount() {
    base("Portfolio")
      .select({ view: "GalleryAPI" })
      .eachPage((records, fetchNextPage) => {
      
      let col1 = 1;
      let col3 = 3;
      
      const viewportInit = window.innerWidth;
      if (viewportInit <= 970) {
        this.reorder(records, 1);
      } else {
        this.reorder(records, 3);
      }
      
      this.setState({recordsInit: records});
      
   //   this.setState({records});
        // console.log(records);

        fetchNextPage();
      });
    
  
        
        window.addEventListener("resize", () => {
           
          
          let viewport = window.innerWidth;
            if (viewport <= 970) {
                this.reorder(this.state.recordsInit, 1);
            } else {
                this.reorder(this.state.recordsInit, 3);
            }
        })
  
    
    
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.records !== this.state.records) {
      console.log("records initially loaded");
    } else {
    }

    if (prevState.content !== this.state.content) {
      console.log("record content loaded:", this.state.content[0]);
    } else {
      console.log("no new content loaded yet");
    }
  }

  handleShow = (record, name, desc, attachments, skilltags, softwaretags) => {
    if (this.state.showModal !== true) {
      this.setState({ showModal: true, selectedRecord: record });
      console.log("the modal is open");
    } else {
      console.log("modal is already open");
    }

    const id = record;
    const selectedTitle = name;
    const description = desc;
    const picArray = attachments;
    const skilltagsArray = skilltags;
    const softwaretagsArray = softwaretags;
    const selectedContent = [selectedTitle, description, picArray, skilltagsArray, softwaretagsArray];
    const prevContent = this.state.content;

    if (prevContent !== selectedContent) {
      this.updateContent(selectedContent);
      console.log("content updated to", id);
    } else {
      console.log("content was not updated");
    }
  };

  updateContent(content) {
    const contentToUpdate = content;
    this.setState({ content: contentToUpdate });
  }

  handleClose = (e) => {
    this.setState({ showModal: false });
    console.log("the modal is closed");
  
  };

reorder = (arr, columns) => {
        //https://github.com/jessekorzan/masonry-css-js
    
        
        const cols = columns;
        const out = [];
        let col = 0;
        while(col < cols) {
            for(let i = 0; i < arr.length; i += cols) {
                let _val = arr[i + col];
                if (_val !== undefined)
                    out.push(_val);
            }
            col++;
        }
        this.setState({ records: out, columns: columns });
}    


  render() {
    return (
      <article className="gallery-masonry" style={{"columnCount" : this.state.columns}}>
    {/*<LazyLoad height={200} offset={500} once>  */} 
        {/*</LazyLoad>*/}
         
        {this.state.records.length > 0 ? (
          this.state.records.map((record, index) => (
             
            <Card key={index} id={record.fields["recordID"]}>
              <figure>
                <img src={record.fields["Cover"][0].url} alt="project cover" />
                <figcaption>
                  <h3>{record.fields["Name"]}</h3>
                  <p>
                  <time datetime={record.fields["YearText"]}>{record.fields["YearText"]}</time>
                  </p>
             


              <dl className="tags">
                <dt>Tags</dt>
                {record.fields["Tags"].length > 0 ? (
                  record.fields["Tags"].map((tag, index) => <dd>{tag}</dd>)
                ) : (
                  <dd>No example available</dd>
                )}

                <dt>Software</dt>

                {record.fields["Software"].length > 0 ? (
                  record.fields["Software"].map((software, index) => (
                    <dd>{software}</dd>
                  ))
                ) : (
                  <dd>No example available</dd>
                )}
              </dl>
                     </figcaption>
              </figure>
            
                 <button
                onClick={() =>
                  this.handleShow(
                    record.fields["recordID"],
                    record.fields["Name"],
                    record.fields["Description"],
                    record.fields["Attachments"],
                    record.fields["Tags"],
                    record.fields["Software"],
                  )
                }
              className="button-primary"
                   >
                view
              </button>
              
              
            </Card>
            
          ))
        ) : (
             <SpinnerCards />
        )}

        {this.state.showModal ? (
          <div className="modal-container" onClick={this.handleClose}>
            <GalleryModal
              recordID={this.state.selectedRecord}
              title={this.state.content[0]}
              description={this.state.content[1]}
              pics={this.state.content[2]}
              skilltags={this.state.content[3]}
              softwaretags={this.state.content[4]}
              onClick={this.handleClose}
            >    
            </GalleryModal>        
          </div>
        ) : (
          null
        )}
               
      </article>
    );
  }
}

export { Projects };



class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "butts"
    };
  }

  render() {
    return (
       <LazyLoad once placeholder={<Spinner />}>    
        <Projects />
      </LazyLoad>
    );
  }
}

export default Gallery;
