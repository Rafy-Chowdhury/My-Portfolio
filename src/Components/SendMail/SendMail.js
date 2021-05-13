import React from 'react';
import emailjs from 'emailjs-com';
import './SendMail.css';

const SendMail = () => {

  const HandleMail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_8g78pko', e.target, 'user_BFlDD3X6PXZ8lAHFYx7G0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

    
    return (
        <div className="container mt-5">
          <h1 className="text-center">Get In Touch</h1>
         <form onSubmit={HandleMail}>
         <div className="row pt-5 mx-auto">
           <div className="col-8 form-group mx-auto">
            <input type="text" className="form-control" placeholder="Name" name="name" />
           </div>
           <div className="col-8 form-group pt-2 mx-auto">
            <input type="email" className="form-control" placeholder="Email Address" name="email" />
           </div>
           <div className="col-8 form-group pt-2 mx-auto">
            <input type="text" className="form-control" placeholder="Subject" name="subject" />
           </div>
           <div className="col-8 form-group pt-2 mx-auto">
            <textarea className="form-control" id="" cols="30" row="8" placeholder="Your message" name="message" ></textarea>
           </div>
           <div className="col-8 pt-3 mx-auto">
            <input type="submit" style={{border: "1px solid crimson", backgroundColor: "crimson", color: "white"}} className="btn" value="Say hello"></input>
           </div>
           </div>
         </form>

        </div>
    );
};

export default SendMail;