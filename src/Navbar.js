// import { useState } from 'react/cjs/react.production.min';
import { useState } from 'react';
import './styles.css';
import { Link } from "react-router-dom";
// import noteSvg from './images/notes_svg.svg'
import readerai_logo from './images/readerai_logo.svg'

// "https://i.imgur.com/MLvNKeW.png"

function Navbar() {

    const[color, setColor] = useState(false);   
    const changeColor = () => {
        if(window.scrollY >=80) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener('scroll', changeColor);

    return (
        <div class={color ? 'navbar navbar-scrol' : 'navbar'}>
            <Link to='/' class="link">
                <a class="logo-title">
                <img
                width="35px"
                height="35px" 
                src={readerai_logo}></img>
                <h2 class="logo-text">
                    ReaderAI
                </h2>    
            </a></Link>
            

            <div class="navbar-right">
                <a><Link to='/features' class='link'>Features</Link></a>
                <a><Link to='/about' className='link'>About</Link></a>
                <a><Link to='/FAQ' class='link'>FAQ</Link></a>
            </div>
        </div>

    )
}

export default Navbar;