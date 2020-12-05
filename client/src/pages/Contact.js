import React from "react"
import emailjs from 'emailjs-com';
// import { Link } from "react-router-dom";

export default function Contact() {
   
    function sendEmail(e) {
     
        e.preventDefault();
        alert("Message Sent!")
       
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_KEY, process.env.REACT_APP_EMAILJS_TEMPLATE_KEY, e.target, process.env.REACT_APP_EMAILJS_USER_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
           
    }
 
    return (
        <div className="container style">
            <div className="row">
                <div className="col-md-12">
                    <div className="jumbotron jumbotron-fluid opacity bg-light text-center">
                        <div className="container">
                            <h1 className="display-4 opacity">Contact</h1>
                        </div>
                    </div>
                </div>
            </div>
            <form className="contact-form" onSubmit={sendEmail}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="from_name" placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text"  className="form-control" name="last_name" placeholder="Last Name" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail4">Email</label>
                    <input type="email"  className="form-control" name="email_name" id="inputEmail4" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Comments</label>
                    <textarea className="form-control"  name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button value="send" type="submit" className="btn btn-light opacity">Email Me</button>
            </form>
        </div>


    )
}