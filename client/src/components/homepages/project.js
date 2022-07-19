import React from 'react';
import { Link } from 'react-router-dom';
import portfolio from '../../images/portfolio.jpeg';
import medical from '../../images/ss1.jpeg';
import stalkword from '../../images/sw.jpeg';
import map from '../../images/map.jpg';
import { Element } from 'react-scroll';


const Project = () => {
    return (
        <Element className='main-container-project'>
            <div className='project'>
                <h2 className='title'>Projects</h2>
                <div className='project-center'>
                    {/* single project */}
                    <div className='single-project'>
                        <div className='single-project-img'>
                            <img src={medical} alt='' />
                        </div>
                        <div className='single-project-info'>
                            <h3>Medical Store Management</h3>
                            <p>A web app to store all the medicines information in the shop, its availability, quantity, price and much more. Shop owner can also create bill for the customers and can keep the past records too.<br />
                            TechStacks used:- Reactjs, Node.js, Express.js, MySQL</p><br />
                    <p>Hosted URL:- <a href='https://rama-medicals.web.app' target='_blank'>https://rama-medicals.web.app</a></p>
                    <p>Github Repo:- <a href='https://github.com/priya-singh07/Medical-Store-Management' target='_blank'>https://github.com/priya-singh07/Medical-Store-Management</a></p>
                        </div>
                    </div>

                    {/* single project */}
                    <div className='single-project'>
                        <div className='single-project-img'>
                            <img src={portfolio} alt='' />
                        </div>
                        <div className='single-project-info'>
                            <h3>Portfolio</h3>
                            <p>This is my portfolio containing all my details including my schooling background, my projects, my skills and much more.</p>
                            <p>TechStacks used:- Reactjs, Node.js, Express.js, MongoDB</p>
                    <br /><p>Hosted URL:- <a href='' target='_blank'></a></p>
                    <p>Github Repo:- <a href='' target='_blank'></a></p>
                        </div>
                    </div>


                    {/* single project */}
                    <div className='single-project'>
                        <div className='single-project-img'>
                            <img src={map} alt='' />
                        </div>
                        <div className='single-project-info'>
                            <h3>Travel Map</h3>
                            <p>A MERN app where you can register yourself and get access to give the ratings/stars to different locations across the world on the map.</p>
                            <p>TechStacks used:- Reactjs, Node.js, Express.js, MongoDB</p>
                    <br /><p>Hosted URL:- <a href='' target='_blank'></a></p>
                    <p>Github Repo:- <a href='https://github.com/priya-singh07/travel-map' target='_blank'>https://github.com/priya-singh07/travel-map</a></p>
                        </div>
                    </div>

                    {/* single project */}
                    <div className='single-project'>
                        <div className='single-project-img'>
                            <img src={stalkword} alt='' />
                        </div>
                        <div className='single-project-info'>
                            <h3>Stalk Word</h3>
                            <p>A web app where one can search any particular word and get its meaning along with synonyms, examples and its pronunciation. It has also the choice of changing the colour mode to light or dark.<br />TechStacks used:- Reactjs</p>
                    <br /><p>Hosted URL:- <a href='https://stalk-word-441b0.web.app/' target='_blank'>https://stalk-word-441b0.web.app/</a></p>
                    <p>Github Repo:- <a href='https://github.com/priya-singh07/Stalk-Word' target='_blank'>https://github.com/priya-singh07/Stalk-Word</a></p>
                        </div>
                    </div>
                    

                </div>
            </div>
        </Element>
    );
}

export default Project;
