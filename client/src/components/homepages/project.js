import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../../images/priya.jpg';
import photo1 from '../../images/ss1.jpeg';


const Project = () => {
    return (
        <div className='main-container'>
            <div className='project'>
                <h2 className='title'>Projects</h2>
                <div className='project-center'>
                    {/* single project */}
                    <div className='single-project'>
                        <div className='single-project-img'>
                            <img src={photo1} alt='' />
                        </div>
                        <div className='single-project-info'>
                            <h3>Medical Management</h3>
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
        </div>
    );
}

export default Project;
