import React, { Component } from 'react'


class Items extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <li>     
          <a 
            href={this.props.url}
           
            rel="noopener noreferrer">{this.props.label}
        </a>       
      </li>
    )
  }
}

class Nav extends Component {
  page = [
    {
      id: 1,
      url: "#",
      label: "portfolio",
    },
    {
      id: 2,
      url: "#",
      label: "about",
    },
    {
      id: 3,
      url: "#",
      label: "contact",
    },
    

  ];

  render() {
    return (
  <nav>
      <ul>
        {this.page.map((page, index, label) => (
          <Items {...page} />
        ))}
      </ul>
  </nav>
    )
  }
}


export default Nav