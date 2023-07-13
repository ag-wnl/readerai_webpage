import './styles.css'
import { Link } from "react-router-dom";

function Footer() {
    return(

        <>
        
            <div class="footer-div">
                
                <div>
                    <h3><Link to='/' class="link-white">Reader.ai</Link></h3>   
                </div>

                <div><Link to='/features' class='footer-div'>Features</Link></div>

                <div><Link to='/FAQ' class='footer-div'>FAQs</Link></div>

                <div>Contact Us</div>

            </div>

        </>

    )
}

export default Footer;