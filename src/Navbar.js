// import { useState } from 'react/cjs/react.production.min';
import { useState } from 'react';
import './styles.css';
import { Link } from "react-router-dom";

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
                width="40px"
                height="40px" 
                src="https://i.imgur.com/MLvNKeW.png"></img>
                <h2 class="logo-text">
                    Reader.ai
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