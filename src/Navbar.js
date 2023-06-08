import './styles.css';

function Navbar() {
    return (
        <div class="navbar">
            <div class="logo-title">
                <img
                width="40px"
                height="40px" 
                src="https://i.imgur.com/MLvNKeW.png"></img>
                <h2 class="logo-text">
                    Reader.ai
                </h2>    
            </div>
            

            <div class="navbar-right">
                <a>Features</a>
                <a>About</a>
                <a>FAQ</a>
            </div>
        </div>

    )
}

export default Navbar;