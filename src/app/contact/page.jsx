'use client'
import './contact.css';
import { GoMail } from "react-icons/go";
import { FaPhone } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';

const contact = () => {
  const [state, handleSubmit] = useForm("xyyrrngd");
  if (state.succeeded) {
    setTimeout(() => {
      window.location.reload();
    }, 2000)
    return <p style={{ display: 'flex', justifyContent: 'center', color: 'white', alignItems: 'center', fontSize: '2rem' }}>Your Message has been sent successfully!</p>;
  }
  return (
    <section className="contactpage">
      <div className="mainheading">
        <div className="mainbgheading">CONTACT</div>
        <div className="mainfrontheading">GET IN TOUCH <span className="me">ME</span></div>
      </div>


      <div className="rowbox">
        <div className="col">
          <p>Thank you for visiting my portfolio! Whether you have a project in mind, want to collaborate, or simply have a question, I'd love to hear from you. Feel free to reach out using the form below or connect with me directly via email.I'll get back to you as soon as possible.</p>
          <div className="con">
            <div className="icon"><GoMail /></div>
            <div className="boxx">
              <div className='title'>MAIL ME</div>
              <div>mehulbansalswm1234@gmail.com</div>
            </div>
          </div>
          <div className="con">
            <div className="icon"><FaPhone /></div>
            <div className="boxx">
              <div className='title'>CALL ME</div>
              <div>+91 8595139817</div>
            </div>
          </div>

          <div className='social'>
            <div><a href="https://github.com/mehul1409"><FaGithub /></a></div>
            <div><a href="https://www.linkedin.com/in/mehul-bansal-27173b254/"><FaLinkedin /></a></div>
            <div><a href="https://instagram.com/mehulbansal1409"><FaInstagramSquare /></a></div>
          </div>
        </div>
        <div className="col2">
          <form className='form' onSubmit={handleSubmit}>
            <div className='inputdiv'>
              <input type="text" className='input' placeholder='Your Name' id='name' name='name' />
            </div>
            <div className='inputdiv'>
              <input type="text" className='input' placeholder='Your Email' id='email' name='email' />
            </div>
            <div className='inputdiv'>
              <textarea placeholder='Message' rows='4' className='input' id='message' name='message'></textarea>
            </div>
            <div className='inputdiv'>
              <input type="submit" className='input' disabled={state.submitting} />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default contact
