import React, { Component } from 'react'



//const Main = (props) => {
  //return (
   // <main className={props.style}>
    //  {props.children}
   // </main>
 // )
//}
//export default Main;




class Main extends Component {
  constructor(props) {
    super(props);
  };
  
  scrollobserver = null;
  
  componentDidMount() {
      const backtop = document.getElementById("backtop-buffer");
   
      this.scrollobserver = new IntersectionObserver(this.showBackTopButton, {
        rootMargin: '350%',
        threshold: [0, 1]
    });

    this.scrollobserver.observe(document.querySelector("#backtop-buffer"));
  }

 showBackTopButton = entries => {
    // let details = document.querySelector("details");
    // let filterIsOpen = details.open;
   const backtop = document.getElementById("backtop");

    if (entries[0].intersectionRatio === 0) {
     backtop.style.display = "block";
      console.log(backtop);
    } else if (entries[0].intersectionRatio === 1) {
     backtop.style.display = "none";
      console.log("no button?");
    }
  };

topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
  
  render() {
    return (
      <main style={this.props.style}>
         <div
          id="backtop-buffer"
          style={{ height: "1px", background: "transparent", content: '" "' }}
        ></div>
        {this.props.children}
        
          <button id="backtop" onClick={() => this.topFunction()}><i /><br />top</button>
         <div
          id="backtop-placeholder"
          style={{ height: "4em", minHeight: "48px", background: "transparent", fontSize: "70%", content: '" "' }}
        ></div>
      </main>
    )
  }
}



export default Main 