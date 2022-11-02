import "./Projects.css"

export default function Projects() {
    return (
        <div className="page-content">
            <div className="project-intro">
                <h1>Projects </h1>
            </div>
            <hr className="title-class-divider"/>
            <div className="project-content">
                <div className="project-card">
                    <h2>Avoid the Veggies</h2>
                    <h4>HTML - CSS - JS</h4>
                    <div className="link-container">
                        <a href="https://cdn-bsct.github.io/avoid-the-veggies/" rel="noreferrer" target="_blank"><i class="material-icons">insert_link</i></a>
                        <a href="https://github.com/cdn-bsct/avoid-the-veggies" rel="noreferrer" target="_blank" class="project-link">GitHub</a>
                    </div>
                    <p>
                        A simplified twist on the classic minesweeper game! This project focuses primarily on front-end web development.
                        All of the functionality was coded using JavaScript. The app manipulates the DOM and stores information in the
                        classes of the objects. This was a fun little challenge that took me 4 days to complete.
                    </p>

                </div>
                <div className="project-card">
                    <h2>LASO App</h2>
                    <h4>MEN Stack</h4>
                    <div className="link-container">     
                        <a href="https://laso-app.herokuapp.com/" rel="noreferrer" target="_blank"><i class="material-icons">insert_link</i></a>
                        <a href="https://github.com/cdn-bsct/LASO-app" rel="noreferrer" target="_blank" class="project-link">GitHub</a>
                    </div>
                    <p>
                        A quick on the go study tool inspired by my own pursuit of studying the japanese language. My initial idea was to find and utilize a language API focused on Japanese. With no luck I created my own little thing. This led me to think, what if I 
                        created my own Japanese Language API? Lastly, working on this app acted as a catalyst for my interest in mobile
                        app development.
                    </p>

                </div>
                <div className="project-card">
                    <h2>Error Diary</h2>
                    <h4>Django - Py - PostgreSQL</h4>
                    <div className="link-container">
                        <a href="https://errordiary.herokuapp.com/" rel="noreferrer" target="_blank"><i class="material-icons">insert_link</i></a>
                        <a href="https://github.com/patel-avi/errordiary" rel="noreferrer" target="_blank" class="project-link">GitHub</a>
                    </div>
                    <p>
                        Multi-user app for keeping track of ones errors as they code. Early on into our bootcamp, out TA's said that it 
                        would be helpful for us to keep track of our errors and solutions to those errors. This was my first collaboration project. 
                        We used Django and Python in the backend and coded in express templates for the front-end. We integrated PostgreSQL, 
                        Webscraping, and Bootstrap for styling.
                    </p>

                </div>
            </div>
        </div>
    )
}