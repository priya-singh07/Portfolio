import React from 'react';
import { Element } from 'react-scroll';

const Education = () => {
    return (
        <Element className='main-container-education'>
            <div className='education'>
                <h2 className='title'>Education</h2>

                <div className='education-center'>
                    {/* single education */}
                    <div className='single-education'>
                    <p>B.Tech(Hons.) from National Institute of Technology, Jamshedpur (2019-2023) with CGPA of 8.84</p>
                    </div>

                    {/* single education */}
                    <div className='single-education'>
                    <p>Class 12 from Vidya Bharati Chinmaya Vidyalaya, Jamshedpur (2018) with 85.00%</p>
                    </div>

                    {/* single education */}
                    <div className='single-education'>
                    <p>Class 10 from Shah Faiz Public School, Ghazipur (2016) with CGPA of 9.8</p>
                    </div>

                    {/* single education */}
                    {/* <div className='single-education'>
                    <p>Bachelor's of Technology from NIT Jamshedpur</p>
                    </div> */}
                    
                </div>
            </div>
        </Element>
    );
}

export default Education;
