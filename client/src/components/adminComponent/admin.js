import React from 'react';
import './admin.css';
import { Link } from 'react-router-dom';
import AboutAdmin from './adminAbout';
import EducationAdmin from './adminEducation';
import ProjectAdmin from './adminProject';
import ExperienceAdmin from './adminExperience';

const Admin = () => {
    return (
        <div className='main-container'>
        <br/>
            <h2 className='title'>
            Admin forms
            </h2>
            <div className='admin-center'>
                {/* aboutAdmin component */}
                <h4 className='admin-title'>About component</h4>
                <AboutAdmin />
                {/* end of aboutAdmin component */}
                <br/>
                <br/>
                <hr style={{border: '1px solid lightgrey'}} />
                <br/>

                {/* educationAdmin component */}
                <h4 className='admin-title'>Education component</h4>
                <EducationAdmin />
                {/* end of educationAdmin component */}
                <br/>
                <br/>
                <hr style={{border: '1px solid lightgrey'}} />
                <br/>

                {/* projectAdmin component */}
                <h4 className='admin-title'>Projects component</h4>
                <ProjectAdmin />
                {/* end of projectAdmin component */}
                <br/>
                <br/>
                <hr style={{border: '1px solid lightgrey'}} />
                <br/>

                {/* experienceAdmin component */}
                <h4 className='admin-title'>Experience component</h4>
                <ExperienceAdmin />
                {/* end of experienceAdmin component */}
                <br/>

            </div>
        </div>
    );
}

export default Admin;
