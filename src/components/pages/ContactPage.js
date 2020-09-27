import React from 'react'

const ContactPage = () => {
  return (
    // Page Wrapper
    <div id='contact-page-wrapper'>
      <div id="contact-wrapper">

        {/* Contact Form */}
        <form id='contact-form' name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
          <p>You can reach me via email using the form below.</p>
          <section id='input-wrapper'>
            <input type="hidden" name="form-name" value="contact" />
            <p id="hidden-input-field">
              <label>Don’t fill this out if you're human: <input name="bot-field"/></label>
            </p>
            <input type="text" id="input-name" className="input-field first-input" name="name" placeholder="Name" required/>
            <input type="email" id="input-email" className="input-field" name="email" placeholder="Email" required/>
            <input type="text" id="input-subject" className="input-field" name="subject" placeholder="Subject" required/>
            <textarea id="input-message" className="input-field" name="message" placeholder="Message" spellCheck="false"/>
          </section>
          <section id='submit-wrapper'>
            <button id='send-mail-button' className='custom-button' type="submit">SEND</button>
          </section>
        </form>

        {/* Contact Details Section */}
        <section id='contact-details-wrapper'>
            <h4>Contact Details</h4>
            <ul id="contact-details">
              <li id="contact-name">Tony D.</li>
              <li id="contact-location">Sofia, Bulgaria</li>
              <li id="contact-email">myemail@email.com</li>
            </ul>
        </section>
      </div>
    </div>
  )
}

export default ContactPage

