import React from 'react';
import profile from '../../images/priya.jpg';
//import Particles from 'react-particles-js';
import Typewriter from 'typewriter-effect';

const Header = () => {
    return (
        <React.Fragment>
            <div className='header'>
                <div className='particles'>
                    <div className='particleComp'></div>
                    <div className='fullname'>
                        <h1>
                            <Typewriter
                                options={{
                                    strings: ['Priya', 'Singh'],
                                    autoStart: true,
                                    loop: true
                                }}
                            />
                        </h1>
                    </div>
                    <div className='cv'>
                        <span><b>CV:</b> <a href='/cv' target='_blank' rel='noreferrer'><i className='fas fa-file-pdf'></i></a></span>
                    </div>
                </div>
            </div>

            <div className='personalInfo'>
                <div className='personalInfo-center'>
                    <div className='personalInfo-details'>

                        {/* single info */}
                        <div className='info'>
                            <label htmlFor='name'>Fullname:</label>
                            <h4>Priya Singh</h4>
                        </div>

                        {/* single info */}
                        <div className='info'>
                            <label htmlFor='occupation'>Occupation:</label>
                            <h4>Engineer</h4>
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
        </React.Fragment>
    );
}

export default Header;
