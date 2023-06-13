import Footer from "../Footer";
import Navbar from "../Navbar";
import '../styles.css'


function Features() {
    return (
        <>
            <Navbar />
            <div className="page-below-nav">
                <h2>Features</h2>
                <div>
                    <h3>
                        Auto-Highlight Important Text
                    </h3>
                    <p>
                    Effortlessly Discover Key Content. Our Auto Highlight feature is designed to streamline your reading experience by automatically highlighting important text content on any webpage. By enabling this feature, you can save valuable time and effortlessly glance over the most relevant information.
                    </p>

                    <a class='highlight-link'>Tutorial will be up soon</a>

                    <p>
                    We understand that the vast amount of text on the internet can be overwhelming, making it difficult to identify crucial details. That's why we developed the Auto Highlight feature, which does the work for you. It scans the webpage, identifies significant content, and applies a subtle highlight, bringing your attention to the most pertinent information.
                    <br></br>
                    This intelligent feature not only helps you save time but also allows for quick information retrieval. If you need to refer back to key points or skim through the webpage, the auto highlights act as visual markers, guiding you to the essential content within seconds.
                    </p>
                </div>

                <div>
                    <h3>
                        Text-Assist
                    </h3>
                    <p>
                    Instant Answers to Your Queries. Your personal companion for instant answers while reading web content. With just a single click, you can unlock a world of information related to any word, term, or selected text on a webpage.
                    </p>

                    <a class='highlight-link'>Tutorial will be up soon</a>

                    <p>
                    We understand that as a reader, you often come across unfamiliar terms, ambiguous phrases, or words whose meanings you'd like to delve deeper into. That's where our Text Assist feature comes to the rescue. Simply select the text you're curious about and click the Text Assist button.

                    <br></br>
                    Text Assist instantly provides you with relevant results, eliminating the need for time-consuming searches or opening multiple tabs. Discover the meaning, usage, and contextual information of words, gain insights into specific terms, or explore related articles to broaden your understanding – all in a matter of seconds.

                    <br></br>
                    <br></br>
                    And that's not all! At ReaderAI, we are committed to continuously improving and enhancing our features to provide you with an even more seamless reading experience. As part of our ongoing efforts, we are actively developing Natural Language Processing (NLP) models specifically tailored to enrich the Text Assist feature.
                    </p>
                </div>

                <div>
                    <h3>
                        ReaderAI Notes
                    </h3>
                    <p>
                    Effortless Note-Taking and Organizational Bliss. A feature designed to revolutionize your note-taking experience while reading web content. With just a right-click and a marker, you can seamlessly capture your thoughts and insights directly on the webpage.
                    </p>

                    <a class='highlight-link'>Tutorial will be up soon</a>

                    <p>
                    Gone are the days of juggling multiple applications or losing track of your notes. With ReaderAI Notes, you can add markers to any section of a webpage, enabling you to associate your notes with specific content effortlessly. Whether it's a subheading, a key paragraph, or an important piece of information, simply place a marker beside it, and a world of note-taking convenience awaits you.

                    <br></br>
                    When you click on a marker, ReaderAI seamlessly transports you to the dedicated Notes tab. Here, you can compose and organize your thoughts, jot down key takeaways, or even expand upon your understanding of the text. With the ability to place multiple markers on a single webpage, you have the flexibility to structure and categorize your notes according to your preferences.

                    <br></br>
                    <br></br>
                    ReaderAI Notes also ensures that your notes are always accessible whenever you revisit the webpage in the future. The markers you've placed will reappear exactly where you left them, acting as visual cues to remind you of the thoughts and insights you captured during your previous reading session. This feature allows you to effortlessly pick up where you left off and revisit your notes with ease.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Features;