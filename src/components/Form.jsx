import React, { Component } from 'react'
import Airtable from "airtable";


const base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY
}).base(process.env.REACT_APP_API_AIRTABLE_BASE_ID);





class ContactForm extends Component {
  constructor(props) {
    super(props);
    
        this.state = {
                      name: '',
                      email: '',
                      message: ''
                     
                     };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
     this.handleBlur = this.handleBlur.bind(this);
    
  };
  
   handleChange(event) {   
      
      
       let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
     
     const field = event.target;
      
      if (field.validity.valid) {
       
    event.target.style.background = '#ffffff';
        event.target.style.border = '2px solid #ccccff';
   
  } else {
   
   
    
  }
    
    }
  
  
  
   handleBlur(event) {
  
     
     const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('email');
 const emailError = document.querySelector('#email');  
     
     const field = event.target;
     
  if (field.validity.valid) {
       
    event.target.style.background = '#ffffff';
    event.target.style.border = '2px solid #ccccff';
   
  } else {
   
   
     event.target.style.background = '#F7E6FF';
    event.target.style.border = '2px solid #E2BBFF';
  }
     
     
   }
  
  
   handleSubmit(event) {
   
    event.preventDefault();
    
    
    base('Messages').create({
  "Name": this.state.name,
  "Message": this.state.message,
  "Email": this.state.email,
  "Company": this.state.company
}, {typecast: true}, function(err, record) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(record.getId());
       alert('Thanks! Your message was sent.');
      document.getElementById("contact").reset();
      
      
});
    
    
  }
  
  
  
  
  render() {
    return (
    
    <>
     <form onSubmit={this.handleSubmit} autoComplete="on" id="contact">
    
    
    <div className="field">
  <label htmlFor="name">
  Name <abbr title="required" aria-label="required">*</abbr>
  </label>
    <input required type="text" id="name" name="name" placeholder=" "  onChange={this.handleChange}   onBlur={this.handleBlur} />
  <span className="error" aria-live="polite"></span>
      </div>
      
      <div className="field">
         <label htmlFor="email">E-mail <abbr title="required" aria-label="required">*</abbr></label>
    <input required type="email" id="email" name="email" placeholder=" " onChange={this.handleChange} onBlur={this.handleBlur} />
        <span classname="error" aria-live="polite"></span>
      </div>
    
    
    <div className="field">
       <label htmlFor="msg">Message <abbr title="required" aria-label="required">*</abbr></label>
    <textarea required spellCheck="true" id="message" name="message" placeholder=" "  onChange={this.handleChange} onBlur={this.handleBlur} />
  
      
      <span className="error" aria-live="polite"></span>
      </div>
    
    <button type="submit" className="send">Send</button>
    
    
    
    
    
     </form>
    
    </>


)
  }
}




export default ContactForm


