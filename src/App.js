import React from 'react'
import SlickCarousel from './SlickCarousel'

function App() {
  return (
    <main>
      <div className="mainClass">
        <div className="titleText">
          <h1>João Pinto</h1>
          <h2>Software Engineer</h2>
        </div>

        <div className="carousel">
          <h3>Projects</h3>
          <SlickCarousel />
        </div>
        <div className="personalBranding">
          <h3>About Me</h3>
          <p>
            I have a very energetic personality that often gets put to use in
            the daily problem-solving marathon. My background helped me develop
            people skills like being resourceful, reliable and available in a
            team-working environment, but also aware, reliable and strategic
            when trusted to lead. My experience at General Assembly equipped me
            with the tool of knowledge and most importantly taught me how to
            apply it in real-life practical situations. All those resources
            combined, help me create powerful platforms, clean websites,
            functional games, responsive apps. Now I’m keen to expand and better
            my stack mastery in a company that invests in their employees’
            technical and practical proficiency to become a better-equipped
            software engineer.
          </p>
        </div>
        <div className="personalBranding">
          <h3>Skills</h3>
          <div className="flex">
            <ul>
              <h4>Front-End</h4>
              <li> JavaScript</li>
              <li> React</li>
              <li> Css Sass</li>
              <li> HTML</li>
            </ul>
            <ul>
              <h4>Back-End</h4>
              <li> Python</li>
              <li> Django</li>
              <li> MongoDB</li>
              <li> Express</li>
              <li> Mongoose</li>
              <li> PostgreSQL</li>
              <li> TablePlus</li>
            </ul>
            <ul>
              <h4>Dev-Extras</h4>
              <li> Node.js</li>
              <li> Yarn</li>
              <li> npm</li>
              <li> Restful API</li>
              <li> Insomnia</li>
              <li> pipenv</li>
              <li> AJAX</li>
            </ul>
            <ul>
              <h4>Soft-Extras</h4>
              <li> 3DS Max</li>
              <li> Adobe Premiere</li>
              <li> Open Broadcaster Software</li>
            </ul>
            <ul>
              <h4>Deployment</h4>
              <li>Github</li>
              <li>Heroku</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
