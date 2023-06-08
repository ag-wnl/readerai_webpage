import './styles.css';
import banner1 from './images/readerai_laptop.png';
import banner2 from './images/banner_2.png';

//This is the landing Page content.

function Banner() {
    return (
        <>

            <div class="banner-div">

                <div class="banner-text">
                    <h1>Keep your notes Organized and your eyes on what’s Important.</h1>

                    <p>
                        Focus on text that's really important. Get explaination for the terms that confuse you and take notes as you read, <b>Reader.ai</b> will organize them.
                    </p>

                    <button class="add-readerai-button">Add Reader.ai to Chrome</button>
                </div>

                <div>
                    <img class="banner-img" src={banner1}></img>
                </div>

            </div>

            <div class="div-below-banner">
                <h3>We are currently developing this landing page, this section will have something interesting for sure.</h3>
            </div>
            
        </>
    )
}

export default Banner;