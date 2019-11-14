import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const categories = [
  {
    id: 1,
    cat: "UX/UI Design & Information Architecture"
  },
  {
    id: 2,
    cat: "eLearning & Instructional Design"
  },
  {
    id: 3,

    cat: "Web Design"
  },
  {
    id: 4,
    cat: "Web Development"
  },
  {
    id: 5,
    cat: "Art & Illustration"
  },
  {
    id: 6,
    cat: "Graphic Design"
  },
  {
    id: 7,
    cat: "Print"
  },
  {
    id: 8,
    cat: "Logos & Branding"
  },
  {
    id: 9,
    cat: "Data & Information"
  }
];

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: ""
    };
  }

  componentDidMount() {
    const cats = categories;

    cats.forEach(catobj => {
      this.countCat(catobj.cat, catobj.id);
    });
  }

  filterRecords(filter) {
    let category = filter;
    const cards = document.getElementsByClassName("gallery-card");
    const cardsArr = Array.from(cards);
    const header = document.getElementById("view");
    const sup = document.getElementById("sup");
    const filterHeader = document.getElementById("filter-header");

    cardsArr.forEach(card => {
      if (card.getAttribute("data-category") === category) {
        card.style.display = "inherit";
      } else {
        card.style.display = "none";
      }
    });

    header.innerHTML = category;
    filterHeader.innerHTML = "Filtered";
    filterHeader.style.backgroundColor = "#E2BBFF";
    filterHeader.style.color = "#111111";
    sup.style.opacity = "0.8";
    
    document.getElementById("category-list").open = false;

  }

  unfilterRecords(filter) {
    let category = filter;
    const cards = document.getElementsByClassName("gallery-card");
    const cardsArr = Array.from(cards);
    const header = document.getElementById("view");
    const sup = document.getElementById("sup");
    const filterHeader = document.getElementById("filter-header");

    cardsArr.forEach(card => {
      card.style.display = "inherit";
    });
    header.innerHTML = "All Projects";
    filterHeader.innerHTML = "Filter by Category";//need to refactor to dangerouslysetInnerHTML
     filterHeader.style.backgroundColor = "rgba(102, 102, 255, 0.5)";
    filterHeader.style.color = "#FFFBFF";
    sup.style.opacity = "0";
    
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  countCat(cat, id) {
    var container = document.querySelector(".gallery-masonry");
    var matches = container.querySelectorAll(`div[data-category="${cat}"]`);
    const lab = document.querySelector(`.cat-${id}`);
    lab.innerHTML = matches.length; //need to refactor to dangerouslysetInnerHTML
  }

  render() {
    return (
      <>
        <header className="sort-header">
          <sup id="sup">Category</sup>
          <h2 id="view">All projects</h2>
        </header>
        
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
            

            <span id="allprojects">
            
              <FontAwesomeIcon icon="grip-horizontal" />
            </span>
          </label>

          <details id="category-list">
            <summary id="filter-header">Filter by Category</summary>

            {categories.map((category, index) => (
              <label
                htmlFor={"category" + category.id}
                className="category-tab"
                key={"category" + category.id}
              >
                <input
                  type="radio"
                  name="category"
                  alt={category.cat}
                  id={"category" + category.id}
                  data-tab={"tab" + category.id}
                  value={category.cat}
                  onClick={() => this.filterRecords(category.cat)}
                />

                <span>
                  <p>{category.cat}</p>
                  <i className={"cat-" + category.id}>()</i>
                </span>
              </label>
            ))}
          </details>
        </div>
      </>
    );
  }
}

export default Sort;
