import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";
import ScrollLock from "react-scroll-lock-component";

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
      buttons: "",
      isScrollLockEnabled: false,
      isDetailsOpen: false
    };
  }

  observer = null;

  componentDidMount() {
    const cats = categories;

    cats.forEach(catobj => {
      this.countCat(catobj.cat, catobj.id);
    });

    this.observer = new IntersectionObserver(this.lockScroll, {
      threshold: [0, 1]
    });

    this.observer.observe(document.querySelector("#sticky-buffer"));
  }

 countCat(cat, id) {
    var container = document.querySelector(".gallery-masonry");
    var matches = container.querySelectorAll(`div[data-category="${cat}"]`);
    const lab = document.querySelector(`.cat-${id}`);
    lab.innerHTML = matches.length; //need to refactor to dangerouslysetInnerHTML
  }

  lockScroll = entries => {
    // let details = document.querySelector("details");
    // let filterIsOpen = details.open;

    if (entries[0].intersectionRatio === 0) {
      this.setState({ isScrollLockEnabled: true });
      console.log("boop");
    } else if (entries[0].intersectionRatio === 1) {
      this.setState({ isScrollLockEnabled: false });
    }
  };

  filterRecords = filter => {
    let category = filter;
    const cards = document.getElementsByClassName("gallery-card");
    const cardsArr = Array.from(cards);

    cardsArr.forEach(card => {
      if (card.getAttribute("data-category") === category) {
        card.style.display = "inherit";
      } else {
        card.style.display = "none";
      }
    });

    this.tidyUp();
    //this.triggerUnbreakColumns(1);
    this.setFilterStyles(category, category, "#E2BBFF", "#111111", "0.8");
  };

 
  unfilterRecords(filter) {
    let category = filter;
    const cards = document.getElementsByClassName("gallery-card");
    const cardsArr = Array.from(cards);

    cardsArr.forEach(card => {
      card.style.display = "inherit";
    });

    this.tidyUp();
    //this.triggerUnbreakColumns(3);
    this.setFilterStyles(
      "All Projects",
      "Filter by Category",
      "rgba(102, 102, 255, 0.5)",
      "#FFFBFF",
      "0"
    );
  }

tidyUp() {
  
  if (this.state.isScrollLockEnabled == true ) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
    document.getElementById("category-list").open = false;
  }

 triggerUnbreakColumns = cols => {
    //this.props.onFilter(cols);
  };

  setFilterStyles(headerText, filterText, bgColor, fontColor, supOpacity) {
   // const header = document.getElementById("view");
    const sup = document.getElementById("sup");
    const filterHeader = document.getElementById("filter-header");

    //header.innerHTML = headerText;
    filterHeader.innerHTML = filterText;
    filterHeader.style.backgroundColor = bgColor;
    filterHeader.style.color = fontColor;
    sup.style.opacity = supOpacity;
  }

 
  componentWillUnmount() {
    this.observer.unobserve(document.querySelector("#sticky-buffer"));
  }

  render() {
    return (
      <>
            <sup id="sup" onClick={() => this.unfilterRecords()}>(Filtered)</sup>
        <section className="content" style={{display: "none"}}>
      
          <h2 id="view">All projects</h2>
          <p>Some kind of description is gonna go here. Probably.</p>
         
        </section>

        <div
          id="sticky-buffer"
          style={{ height: "1px", background: "transparent", content: '" "' }}
        ></div>

        <ScrollLock className="sticky" enabled={this.state.isScrollLockEnabled}>
          <div className="sort-container" id="sort">
            <label
              htmlFor="all"
              className="category-tab"
              id="allprojects-label"
              alt="View all projects"
            >
              <input
                type="radio"
                name="category"
                alt="View all projects"
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
        </ScrollLock>
      </>
    );
  }
}

export default Sort;
