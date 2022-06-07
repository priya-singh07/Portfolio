import React from 'react';
import { Element } from 'react-scroll';

const About = () => {
    return (
        <Element className='main-container-about'>
            <div className='about'>
                <h2 className='title'>
                    About
                </h2>
                {/* about */}
                <div className='about-info'>
                    <p>
                    Hey reader!💙
                    <p></p>
I am Priya Singh, an undergraduate student from NIT Jamshedpur with major inclination towards Coding and Web Development👩‍💻
I am active on different coding platforms such as Leetcode, GFG, Hackerrank, Hackerearth and giving contests too📈. I have good problem solving ability and DSA skills and I'm working on myself to improve better🕺.
I am also inclined towards Web Development and have learnt the techstacks including ReactJS, Nodejs, MySQL, MongoDB and made some projects on it which you can see on my github profile(featured section). 
Apart from this, I am also interested in designing. I know the basics of Adobe Photoshop and had also made some posters✨.
I am a keen learner doing things perfectly and always want to learn new things to enlighten my knowledge and skills💡.
                    </p>
                </div>
            </div>
        </Element>
    );
}

export default About;
