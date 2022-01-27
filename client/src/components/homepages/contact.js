import React from 'react';
import './contact.css';
import photo from '../../images/priya.jpg';

const Contact = () => {
    return (
        <div className='main-container'>
            <div className='contactForm'>
                <h2 className='title'>Contact</h2>
                <div className='contactForm-center'>
                    <div className='contact_form'>
                        <form>
                            <p>message</p>
                            <label htmlFor='name'>Name</label>
                            <input type='text' placeholder='import name...' required />

                            <label htmlFor='email'>Email</label>
                            <input type='email' placeholder='import email...' required />

                            <label htmlFor='message'>Message</label>
                            <textarea type='text' placeholder='import contact reason...' name='message' id=''></textarea>

                            <div className='send-btn'>
                                <button type='submit'>Send</button>
                            </div>
                        </form>
                    </div>

                    {/* contact info */}
                    <div className='contact-info'>
                        <h4>Send your message</h4>
                        <img src={photo} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

