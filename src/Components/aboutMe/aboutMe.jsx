import "./aboutMe.css"

export default function About(props) {
    return (
        <div className="page-content">
            <div className="about-container">
                <div className="about-header">
                    <h1>WHO AM I? WHAT AM I ALL ABOUT?</h1>
                </div>
                <hr />
                <div className="about-content">
                    Hello and thank you for visiting! As you already know, my name is Justin Feldman. I am a software developer
                    who enjoys working primarily in the back-end with a, rather, unorthodox entry into this industry. Around mid 2022,
                    I felt that I was spinning my tires, not going anywhere. Oddly, my mother had sent me a personality quiz to do.
                    I never gave it much thought but decided to humour her request, as she thought it might help me find a new 
                    direction. After completing it- and two other different personality quizzes- under the career section, programming
                    and coding were recommended. I thought back to the times I studied computer science in High School and how much
                    fun I had. It was then I decided to make a move. Over the next month, I would research programs, bootcamps, and 
                    industry viability. 
                    <br /><br />
                    The following four months would be a blur of learning valuable skills from my intructors and TA's at General 
                    Assembly. I started and finished the bootcamp on a strong note and still strive to learn more and more. Currently, 
                    I am tackling the wonderful worl of mobile applications. Once I have learned enough, I will be designing my first app.
                    Until then, I continue to think of new web application projects and how to improve on my older projects (especially
                    the ones that need it.) 
                    <br /><br />
                    Once again, thank you for taking the time to read about the person I am. If you are a potential employer, you can contact
                    me through LinkedIn or via my personal email (please see my resume). You can view my resume by clicking below.
                    <br /><br />
                    <a href="https://www.dropbox.com/s/dmrubqulbjvcall/resume_JustinFeldman.pdf?dl=0" rel="noreferrer" target="_blank" className="resume-btn">Resume</a>
                </div>
            </div>
        </div>
    )
}