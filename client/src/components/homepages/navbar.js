import React, {useState} from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../images/priya1.jpg';
import { scroller } from 'react-scroll';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 800,
            delay: 50,
            smooth: true,
            offset: -80
        })
    }

    const actToggle =()=>{
        setToggle(!toggle)
    }

    const closeNavbar=()=>{
        if(toggle===true){
        setToggle(false)
        }
    }
    return (
        <div className='nav-container'>
        <nav>
            <div className='logoBtn'>
            <Link to="/" onClick={()=>scrollToElement('main-container-home')}><img src={Logo} alt='' /></Link>

            <div className='btn' onClick={actToggle}>
                <div className={toggle ? "bar1 animateBar":"bar bar1"}></div>
                <div className={toggle ? "bar2 animateBar":"bar bar2"}></div>
                <div className={toggle ? "bar3 animateBar":"bar bar3"}></div>
            </div>  

            </div>

            <div className='links-container'>
                <ul className={toggle ? "new-links links":"links"} onClick={closeNavbar}>
                    <li><Link to="/" onClick={()=>scrollToElement('main-container-home')}>Home</Link></li>
                    <li><Link to="/" onClick={()=>scrollToElement('main-container-about')}>About</Link></li>
                    <li><Link to="/" onClick={()=>scrollToElement('main-container-education')}>Education</Link></li>
                    <li><Link to="/" onClick={()=>scrollToElement('main-container-project')}>Projects</Link></li>
                    {/* <li><Link to="/">Experience</Link></li> */}
                    <li><Link to="/" onClick={()=>scrollToElement('main-container-contact')}>Contact</Link></li>
                    {/* <li><Link to="/">Admin</Link></li>
                    <li><Link to="/login">Login</Link></li> */}
                </ul>
            </div>
        </nav>
        
        </div>
    );
}

export default Navbar;
