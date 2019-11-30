import React from 'react'

const ContactPage = () => {
  return (
    <div id='contact-page-wrapper'>
      <form id='form-wrapper'>
        <p>You can reach me via email using the form below.</p>
        <section id='input-wrapper'>
          <input type="text" id="input-name" className="input-field first-input" name="name" placeholder="Name" required/>
          <input type="email" id="input-email" className="input-field" name="email" placeholder="Email" required/>
          <input type="text" id="input-subject" className="input-field" name="subject" placeholder="Subject" required/>
          <textarea id="input-message" className="input-field" name="message" placeholder="Message" spellCheck="false"/>
        </section>
        <section id='submit-wrapper'>
          <button id='send-mail-button' className='custom-button'>SEND</button>
        </section>
      </form>
      <section id='contact-details-wrapper'>
          <h4>Contact Details</h4>
          <ul id="contact-details">
            <li id="contact-name">Anthony D. Borr</li>
            <li id="contact-location">Sofia, Bulgaria</li>
            <li id="contact-email">myemail@email.com (dummy)</li>
          </ul>
        </section>
    </div>
  )
}

export default ContactPage

