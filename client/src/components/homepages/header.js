import React from 'react';
import profile from '../../images/priya1.jpg';
//import Particles from 'react-particles-js';
import Typewriter from 'typewriter-effect';
import { Element } from 'react-scroll';

const Header = () => {
    return (
        <React.Fragment>
            <Element className='main-container-home'>
            <div className='header'>
                <div className='particles'>
                    <div className='particleComp'></div>
                    <div className='fullname'>
                        <h1>
                            <Typewriter
                                options={{
                                    strings: ['Web Developer', 'Loves to Code'],
                                    autoStart: true,
                                    loop: true
                                }}
                            />
                        </h1>
                    </div>
                    <div className='cv'>
                        <span><b>CV:</b> <a href='https://drive.google.com/file/d/1CRn8O-Zao0l1npcAF1SIAAPZgj4TUYDE/view?usp=sharing' target='_blank' rel='noreferrer'><i className='fas fa-file-pdf'></i></a></span>
                    </div>
                </div>
            </div>

            <div className='personalInfo'>
                <div className='personalInfo-center'>
                    <div className='personalInfo-details'>

                        {/* single info */}
                        <div className='info'>
                            <label htmlFor='name'>Name:</label>
                            <h4>Priya Singh</h4>
                        </div>

                        {/* single info */}
                        <div className='info'>
                            <label htmlFor='occupation'>Occupation:</label>
                            <h4>Upcoming SDE</h4>
                        </div>

                        {/* single info */}
                        <div className='info'>
                                <label htmlFor='email'>E-mail:</label>
                                <h4>priyapragya0710@gmail.com</h4>
                        </div>

                    </div>

                    <div className='personalInfo-img'>
                        <img src={profile} alt='profile'></img>
                    </div>
                </div>
            </div>
            </Element>
        </React.Fragment>
    );
}

export default Header;
