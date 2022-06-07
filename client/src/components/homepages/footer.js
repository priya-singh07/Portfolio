import React from 'react';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

const Footer = () => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 800,
            delay: 50,
            smooth: true,
            offset: -80
        })
    }

    return (
        <React.Fragment>
            <div className='main-title'>
                <h2 className='title contact-title'>
                    Contact
                </h2>
            </div>
            <div className='main-contact'>
                <div className='contact'>
                    <div className='contact-center'>
                        {/* links */}
                        <div className='contact-center-links'>
                            <h3>Links</h3>
                            <div className='contact-links'>
                            <li><Link to="/" onClick={()=>scrollToElement('main-container-home')}>Home</Link></li>
                            <li><Link to="/" onClick={()=>scrollToElement('main-container-about')}>About</Link></li>
                            <li><Link to="/" onClick={()=>scrollToElement('main-container-education')}>Education</Link></li>
                            <li><Link to="/" onClick={()=>scrollToElement('main-container-project')}>Projects</Link></li>
                            {/* <li><Link to="/">Experience</Link></li> */}
                            <li><Link to="/" onClick={()=>scrollToElement('main-container-contact')}>Contact</Link></li>
                            {/* <li className='admin'><Link to='/'>Admin</Link></li>
                            <li><Link to="/">Login</Link></li> */}
                            </div>
                        </div>

                         {/* media */}
                         <div className='contact-center-media'>
                            <h3>Media</h3>
                            <div className='contact-media'>
                                <li><a href='https://github.com/priya-singh07'><i className='fab fa-github-square'></i>Github</a></li>
                                {/* <li><a href='#'><i className='fab fa-facebook-square'></i>Facebook</a></li> */}
                                <li><a href='https://www.linkedin.com/in/priya-singh-1b3124201/'><i className='fab fa-linkedin'></i>Linkedin</a></li>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <p>Designed and created by Priya</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;
