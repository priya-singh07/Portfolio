import React, { useState } from 'react';
import './contact.css';
import photo from '../../images/contact1.jpg';
import { Element } from 'react-scroll';
import axios from 'axios';
import load2 from '../../images/load.gif';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [banner, setBanner] = useState('');
    const [bool, setBool] = useState(false);

    //handle inputs
    const handleNameChange = (e) => {
        setName(e.target.value);
        // console.log(name);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        // console.log(email);
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        // console.log(message);
    }

    //submit form
    const formSubmit = (e) => {
        e.preventDefault();

        let data = {
            name: name,
            email: email,
            message: message
        }

        setBool(true);

        axios.post('/contact', data).then(res => {
            setBanner(res.data.msg);
            setBool(false);
            setTimeout(() => {
                setBanner('');
            }, 2000)

            setName('');
            setEmail('');
            setMessage('');

        }).catch(err => console.log(err))
    }


    return (
        <Element className='main-container-contact'>
            <div className='contactForm'>
                <h2 className='title'>Contact</h2>
                <div className='contactForm-center'>
                    {/* <div className='contact_form'>
                        <form onSubmit={formSubmit}>
                            <p>{banner}</p>
                            <label htmlFor='name'>Name</label>
                            <input type='text' placeholder='import name...' required value={name} onChange={handleNameChange} />

                            <label htmlFor='email'>Email</label>
                            <input type='email' placeholder='import email...' value={email} onChange={handleEmailChange} />

                            <label htmlFor='message'>Message</label>
                            <textarea type='text' placeholder='import contact reason...' name='message' id='' value={message} onChange={handleMessageChange} />

                            <div className='send-btn'>
                                <a href='mailto:priyapragya0710@gmail.com ? subject=Email from Portfolio'><button type='submit'>Send a mail</button></a> */}
                                {/* <button type='submit'>Send{bool ?<b className='load'><img src={load2} alt='' /></b>: ''}</button> */}
                            {/* </div>
                        </form>
                    </div> */}

                    {/* contact info */}
                    <div className='contact-info'>
                        <a href='mailto:priyapragya0710@gmail.com ? subject=Email from Portfolio'>
                            <h4>Send a message</h4>
                            <img src={photo} alt='' />
                        </a>
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default Contact;

