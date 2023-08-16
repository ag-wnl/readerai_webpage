import './styles.css';

import noteSvg from './images/notes_svg.svg'
import highlightSvg from './images/highlight_banner_svg.svg'
import textassistSvg from './images/text_assist_svg.svg'
import banner_img from './images/readerai_banner.svg'
import React from 'react';
import Typewriter from "typewriter-effect";
//This is the landing Page content.

function Banner() {

    return (
        <>
            <div class="banner-div">
                
                <div class="banner-text">
                    <h1>Keep Your Notes Organized and Your Eyes on What’s Important.</h1>
                    
                    <div class='typewriter'>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Utilize the power of Deep Learning to make your web browsing efficient.")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Annotate web pages with just a click!")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Let ReaderAI organize everything for you.")
                                    .start();
                            }}
                        />
                    </div>
        
                    <p>
                        Focus on text that's really important. Get explaination for the terms that confuse you and take notes as you read, <b>ReaderAI</b> will organize them.
                    </p>

                    <button class="add-readerai-button">Add ReaderAI to Chrome</button>
                </div>

                <div class="container">
                    <img class="banner-img" src={banner_img}></img>
                </div>
                

            </div>

            <div class="div-below-banner">
                <div class='lower-div'>
                    <p><b>Auto-Highlights</b> the most important text content in the text</p>

                    <img class="low-div-img" src={highlightSvg}></img>
                </div>

                <div class='lower-div'>
 
                    <p>Get defination, pronounciation of words, explaination for terms that are confusing just by selecting it and clicking on the <b>Text-assist button</b>.</p>

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