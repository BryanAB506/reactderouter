
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactPage.css'




export default function ContactPage() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lf6svdw', 'template_gkkkpmb', form.current, {
        publicKey: 'DzsNz7PHn5M_yU687',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>

      <form className='field' ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input className='todas' type="text" name="user_name" />
        <label>Email</label>
        <input className='todas' type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className='todas' type="submit" value="Send" />
      </form>


    </div>

   
  )
}
