import React from 'react';
import { Link } from 'react-router-dom';

const Adminabout = () => {
    return (
        <div className='same-component'>
            <div className='same-form'>
                <form>
                    <h4>About component</h4>
                    <label htmlFor='text'>About</label>
                    <textarea name='textarea' cols='30' rows='3'></textarea>
                    <button type='submit'>Add item</button>
                </form>
            </div>
            <div className='same-item'>
                <div className='about-info'>
                    <div className='icons'>
                        <Link to={`/editAbout`}><i className='fas fa-edit'></i></Link>
                        <i className='fas fa-trash'></i>
                    </div>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                    type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </div>

            <h3 className='item-delete-tab'></h3>


        </div>
    );
}

export default Adminabout;
