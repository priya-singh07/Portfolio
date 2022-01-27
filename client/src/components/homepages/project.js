import React from 'react';
import photo from '../../images/priya.jpg';

const Project = () => {
    return (
        <div className='main-container'>
            <div className='project'>
                <h2 className='title'>Projects</h2>
                <div className='project-center'>
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
