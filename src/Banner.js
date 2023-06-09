import './styles.css';
import banner1 from './images/readerai_laptop.png';
import banner2 from './images/banner_2.png';
import laptop_screen from './images/laptop_screen.gif'
import highlighted from './images/highlight_img.png'
import textassist from './images/text_assist.png'
import notes from './images/note_marker.png'

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
                    <img class="banner-img" src={laptop_screen}></img>
                </div>

            </div>

            <div class="div-below-banner">
                <div class='lower-div'>
                    <p><b>Auto-Highlights</b> texts which lead to the most important extracts from the text</p>

                    <img class="low-div-img" src={highlighted}></img>
                </div>

                <div class='lower-div'>
 
                    <p>Get defination pronounciation of words, explaination for terms which you're curious about just by selecting it and clicking on the <b>Text-assist button</b>.</p>

                    <img class="low-div-img" src={textassist}></img>

                </div>

                <div class='lower-div'>
 
                    <p>Add a <b>note marker</b> wherever you feel like noting things down. Once added, these markers will appear wherever you have placed them in the webpage whenever you visit the site. Simply <b>click</b> the marker to open your notes which are always editable.</p>

                    <img class="low-div-img" src={notes}></img>

                </div>
                
            </div>
            
        </>
    )
}

export default Banner;