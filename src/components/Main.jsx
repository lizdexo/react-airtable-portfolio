import React from 'react'



const Main = (props) => {
  return (
    <main className={props.style}>
      {props.children}
    </main>
  )
}
export default Main;



/*
class Main extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <main style={this.props.style}>
        {this.props.children}
      </main>
    )
  }
}



export default Main */