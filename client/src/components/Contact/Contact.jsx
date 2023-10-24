import React, { useState } from 'react';
import "./contact.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AccountCircle, Comment, EmailOutlined } from "@mui/icons-material";

const Contact = () => {
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch('http://localhost:5000/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, message }),
        credentials: 'include'
      });
      if (response.ok) {
        response.json().then((userInfo) => {
          console.log(userInfo);
          toast.success("Details have submitted successfully"); 
          setUsername('');
          setEmail('');
          setMessage('');
        });
      } else {
        toast.error('Email already Registered');
      }
    } catch (error) {
      toast.error('Something went wrong Try again !');
      // console.error(error);
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="heading">
      <h1><span style={{color:"#FE3838"}}>need a</span> <span style ={{color:"#fff"}}>website</span></h1>
      </div>
      <div className="contact_container">
        <form className="contact_container_form" onSubmit = {handleSubmit}>
          <div className="contact_container_form_input">
            <label htmlFor="name">Name: </label>
            <div className="textbox">
              <input
                type="text"
                id="name"
                value = {username}
                placeholder="Enter Your Name Here"
                required
                onChange={event => setUsername(event.target.value)}
              />
              <span className="name_span">
                <AccountCircle />
              </span>
            </div>
          </div>
          <div className="contact_container_form_input">
            <label htmlFor="email">Email: </label>
            <div className="textbox">
              <input
                type="email"
                id="email"
                value = {email}
                placeholder="Enter your email here"
                onChange={event => setEmail(event.target.value)}
                required
                
              />
              <span className="email_span">
                <EmailOutlined />
              </span>
            </div>
          </div>
          <div className="contact_container_form_input">
            <label htmlFor="textarea">Message Here: </label>
            <div className="textbox">
              <textarea
                name="textarea"
                value={message}
                id="textarea"
                placeholder="Enter Info Here"
                onChange = {event => setMessage(event.target.value)}
              ></textarea>
              <span className="textarea_span">
                <Comment />
              </span>
            </div>
          </div>
          <button className="btn">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
