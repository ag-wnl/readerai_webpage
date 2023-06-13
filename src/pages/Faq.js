import Footer from "../Footer";
import Navbar from "../Navbar";


function Faq() {
    return (
        <>
            <Navbar />
            <div className="page-below-nav">
                <h2>FAQs</h2>
                <div>
                    <h4>Does ReaderAI store/use my data?</h4>
                    <p>
                        ReaderAI does not use your data for any purpose. We respect the privacy of of users and do not use data from user notes or monitor the features being used by the user for any purpose. 
                    </p>
                </div>

                <div>
                    <h4>If I come across a bug while using ReaderAI, how do I report it?</h4>
                    <p>
                        Bug reporting page will be up soon! 
                    </p>
                </div>

                <div>
                    <h4>How can I support the work being carried on by ReaderAI</h4>
                    <p>
                        We really appreciate your interest in supporting us. You can support us by recommending ReaderAI to friends and people you think might save a lot of time by using it! 
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Faq;