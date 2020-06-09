import React, { Component } from 'react'

const Figma = (props) => {
  return (
    
    <iframe className="figma" style={{...props.style}} width="100%" height="500" src={props.src} allowfullscreen></iframe>
    
  )
}
export {Figma};








const Codepen = (props) => {
  return (
    
    <iframe className="codepen" style={{...props.style}} width="100%" height="600" src={props.src} allowfullscreen scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true">
    
  <a href='https://codepen.io/dexoplanet'>@dexoplanet</a>) on <a href='https://codepen.io'>CodePen</a>.
    
    </iframe>
  
    
  )
}
export {Codepen};