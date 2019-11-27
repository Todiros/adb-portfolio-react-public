import React from 'react'

const ContactPage = () => {
  return (
    <div id='contact-page-wrapper'>
      <p>You can reach me via email using the form below.</p>
      <form id='form-wrapper'>
        <section id='input-wrapper'>
          <input type="text" id="input-name" className="input-field first-input" name="name" placeholder="Name" required/>
          <input type="email" id="input-email" className="input-field" name="email" placeholder="Email" required/>
          <input type="text" id="input-subject" className="input-field" name="subject" placeholder="Subject" required/>
          <textarea id="input-message" className="input-field" name="message" placeholder="Message" spellcheck="false"/>
        </section>
        <section id='submit-wrapper'>
          <button id='send-mail-button' className='custom-button'>SEND</button>
        </section>
      </form>
    </div>
  )
}

export default ContactPage

