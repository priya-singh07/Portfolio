import React from 'react';

const Education = () => {
    return (
        <div className='main-container'>
            <div className='education'>
                <h2 className='title'>Education</h2>

                <div className='education-center'>
                    {/* single education */}
                    <div className='single-education'>
                    <p>B.Tech(Hons.) from National Institute of Technology, Jamshedpur (2019-2023)</p>
                    </div>

                    {/* single education */}
                    <div className='single-education'>
                    <p>Class 12 from Vidya Bharati Chinmaya Vidyalaya, Jamshedpur - 2018</p>
                    </div>

                    {/* single education */}
                    <div className='single-education'>
                    <p>Class 10 from Shah Faiz Public School, Ghazipur (U.P.) - 2016</p>
                    </div>

                    {/* single education */}
                    {/* <div className='single-education'>
                    <p>Bachelor's of Technology from NIT Jamshedpur</p>
                    </div> */}
                    
                </div>
            </div>
        </div>
    );
}

export default Education;
