import './styles.css';

import laptop_screen from './images/laptop_screen.gif'
import highlighted from './images/highlight_banner.png'
import textassist from './images/text_assist_banner.png'
import notes from './images/notes_banner.png'
import highq from './images/highq_vid.mp4';
import laptop_stat from './images/laptop_static.png'
import noteSvg from './images/notes_svg.svg'
import highlightSvg from './images/highlight_banner_svg.svg'
import textassistSvg from './images/text_assist_svg.svg'

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

                <div class="container">
                    <img class="banner-img" src={laptop_stat}></img>
                    <video class="banner-vid" src={highq} autoPlay loop muted/>
                </div>

            </div>

            <div class="div-below-banner">
                <div class='lower-div'>
                    <p><b>Auto-Highlights</b> texts which lead to the most important extracts from the text</p>

                    <img class="low-div-img" src={highlightSvg}></img>
                </div>

                <div class='lower-div'>
 
                    <p>Get defination pronounciation of words, explaination for terms which you're curious about just by selecting it and clicking on the <b>Text-assist button</b>.</p>

                    <img class="low-div-img" src={textassistSvg}></img>

                </div>

                <div class='lower-div'>
 
                    <p>Add a <b>note marker</b> wherever you feel like noting things down. Once added, these markers will appear wherever you have placed them in the webpage whenever you visit the site. Simply <b>click</b> the marker to open your notes which are always editable.</p>

                    <img class="low-div-img" src={noteSvg}></img>

                </div>
                
            </div>
            
        </>
    )
}

export default Banner;