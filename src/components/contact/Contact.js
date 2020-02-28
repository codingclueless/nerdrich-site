import React, { useState } from 'react';
import './Contact.scss';
import Footer from '../footer/Footer';
import { useSpring, animated } from 'react-spring';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Contact = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // const [setSent] = useState(false);
  // const [buttonText, setButtonText] = useState('Submit');

  const handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, subject, email, message })
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  


  // const resetForm = () => {
  //   setName('');
  //   setSubject('');
  //   setEmail('');
  //   setMessage('');
  //   setButtonText('Message Sent');
  // };

  const rightAnimated = useSpring({ from: { opacity: 0, transform: 'translateY(200px)' }, opacity: 1, transition: '1.5s ease-out', transform: 'translateY(0px)' });
  const leftAnimated = useSpring({ from: { opacity: 0, transform: 'translateY(-250px)' }, opacity: 1, transition: '1.5s ease-out', transform: 'translateY(0px)' });

  return (
    <div className='Contact'>
      <div className='main'>
        <animated.div style={leftAnimated} className='leftContact'>
          <h1>Contact</h1>
          <p>Email: 
            <a className='sendIt' href="mailto:wesgriffincodes@gmail.com?Subject=send%20it" target="_top"> WesGriffinCodes@gmail.com</a>
          </p>
        </animated.div>
        <animated.form style={rightAnimated} onSubmit={handleSubmit} className='form'>
          <div>
            <h3>Name</h3>
            <input type="text" name="name" placeholder='enter your name' value={name} onChange={(e) => setName(e.target.value)} required/>
          </div>
          <div>
            <h3>Subject</h3>
            <input type="text" name="subject" placeholder='enter your subject' value={subject} onChange={(e) => setSubject(e.target.value)} required/>
          </div>
          <div>
            <h3>Email</h3>
            <input type="email" name="email" placeholder='enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div>
            <h3>Message</h3>
            <textarea className="message" placeholder='send me something' type="textarea" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required/>
          </div>
          <button className='button' type="submit"><h3>Submit</h3></button>
        </animated.form>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  );
};

export default Contact;

