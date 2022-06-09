import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../../images/priya.jpg';
import medical from '../../images/ss1.jpeg';
import stalkword from '../../images/sw.jpeg';
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
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                    type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged.</p>
                    <p>Hosted URL:- <a href='https://rama-medicals.web.app' target='_blank'>https://rama-medicals.web.app</a></p>
                    <p>Github Repo:- </p>
                        </div>
                    </div>

                    {/* single project */}
                    <div className='single-project'>
                        <div className='single-project-img'>
                            <img src={stalkword} alt='' />
                        </div>
                        <div className='single-project-info'>
                            <h3>Stalk Word</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                    type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged.</p>
                    <p>Hosted URL:- <a href='https://stalk-word-441b0.web.app/' target='_blank'>https://stalk-word-441b0.web.app/</a></p>
                    <p>Github Repo:- <a href='https://github.com/priya-singh07/Stalk-Word' target='_blank'>https://github.com/priya-singh07/Stalk-Word</a></p>
                        </div>
                    </div>

                    {/* single project */}
                    <div className='single-project'>
                        <div className='single-project-img'>
                            <img src={photo} alt='' />
                        </div>
                        <div className='single-project-info'>
                            <h3>SmartPhone Project</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                    type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>

                    {/* single project */}
                    <div className='single-project'>
                        <div className='single-project-img'>
                            <img src={photo} alt='' />
                        </div>
                        <div className='single-project-info'>
                            <h3>SmartPhone Project</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                    type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>

                </div>
            </div>
        </Element>
    );
}

export default Project;
