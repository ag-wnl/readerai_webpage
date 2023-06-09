// import { useState } from 'react/cjs/react.production.min';
import { useState } from 'react';
import './styles.css';

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
            <a class="logo-title">
                <img
                width="40px"
                height="40px" 
                src="https://i.imgur.com/MLvNKeW.png"></img>
                <h2 class="logo-text">
                    Reader.ai
                </h2>    
            </a>
            

            <div class="navbar-right">
                <a>Features</a>
                <a>About</a>
                <a>FAQ</a>
            </div>
        </div>

    )
}

export default Navbar;