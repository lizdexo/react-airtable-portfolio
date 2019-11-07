import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

    const categories = [
      {
        id: 1,
        cat: "UX/UI Design & Information Architecture",       
      },
      {
        id: 2,
        cat: "Logos & Branding",       
      },
      {
        id: 3,
        cat: "Print",      
      },
      {
        id: 4,
        cat: "Web Development",       
      },
      {
        id: 5,
        cat:  "Graphic Design",      
      },
      {
        id: 6,
        cat: "Art & Illustration",     
      },
      {
        id: 7,
        cat: "eLearning & Instructional Design",      
      },
       {
        id: 8,
        cat: "Web Design",     
      },
      {
        id: 9,
        cat: "Data & Information"     
      },  
]


class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: '',
    };
  }

  componentDidMount() {}

  filterRecords(filter) {
    let category = filter;
    const cards = document.getElementsByClassName("gallery-card");
    const cardsArr = Array.from(cards);
    const header = document.getElementById("view");
    const sup = document.getElementById("sup");

    
    cardsArr.forEach(card => {
      if (card.getAttribute("data-category") === category) {
        card.style.display = "inherit";
      } else {
        card.style.display = "none";
      }
    });
    
    header.innerHTML = category;
    sup.style.opacity = "0.9";
  }
  
    unfilterRecords(filter) {
    let category = filter;
    const cards = document.getElementsByClassName("gallery-card");
    const cardsArr = Array.from(cards);
    const header = document.getElementById("view");
      const sup = document.getElementById("sup");

    cardsArr.forEach(card => {
        card.style.display = "inherit";
      
    });
      header.innerHTML = "All Projects";
      sup.style.opacity = "0";
  }

  render() {
    

    
    return (
      <div className="sort-container">
        
        <label htmlFor="all" className="category-tab" id="allprojects-label">
          <input
                    type="radio"
                    name="category"
                    alt="See all items" 
                    id="all"
                    data-tab="default"
                    value="all"
                    onClick={() => this.unfilterRecords()}
                    defaultChecked={true}
                  />
                                   
            <span id="allprojects">  <FontAwesomeIcon icon="grip-horizontal" /> </span>
               
                  </label>
        
        <details>
        <summary>Filter by Category</summary>
        
          {categories.map((category, index) => (
            
         
         <label htmlFor={"category" + index} className="category-tab">
          <input
                    type="radio"
                    name="category"
                    alt={category.cat} 
                    id={"category" + index}
                    data-tab={"tab" + index}
                    value={category.cat}
                    onClick={() => this.filterRecords(category.cat)}
                  />
                                   
            <span>{category.cat}</span>
               
                  </label>

       ))}
            
          </details>
        
          <header><sup id="sup">Currently viewing</sup><h2 id="view">All projects</h2></header>
      
      </div>
    );
  }
}

export default Sort;
