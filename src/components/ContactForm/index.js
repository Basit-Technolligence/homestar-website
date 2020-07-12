import React from 'react'
import './style.css'
import  Form  from 'react-bootstrap/Form';
import  Button  from 'react-bootstrap/Button';
import { TextArea } from 'semantic-ui-react';

const ContactForm=()=>{
    const bgColors={
        Yellow:'#1227',
        Black:'#000'
    }
    return(
        <div>
                <div className='container-fluid bg-white py-4 '>
                    <div className='row'>
                        <div className='col-md-8 mx-auto contact-form p-5'>
                            <div className='form-heading'>
                        <h1>Contact us</h1>
                   <p>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</p>
                   </div>
                        <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputName">Name</label>
            <input type="text" className="form-control" id="inputName" placeholder="Name" required/>
          </div>
          <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required />
          </div>
        </div>
        <div className="form-group">
          <label for="inputSubject">Subject</label>
          <input type="text" className="form-control" id="inputSubject" placeholder="Issue Related to " required />
        </div>
        <div className="form-group">
          <label for="inputMessage">Message</label>
          <TextArea type="text" col='6' required className="form-control" id="inputMessage" placeholder="Enter your message" >

              </TextArea>
        </div>
        
       <div className='btn-div'>
        <button type="submit" className="btn btn-dark ">Submit</button>
        </div>
      </form>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ContactForm