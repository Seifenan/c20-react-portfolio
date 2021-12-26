import React from "react";

import iFitNut from "../assets/iFitNut.png"
import boredGenie from "../assets/bored-genie.png"
import passGen from "../assets/password-gen.png"
import weatherDash from "../assets/weather-dashboard.png"
import wdScheduler from "../assets/scheduler.png"
import cQuiz from "../assets/code-quiz.png"

function Portfolio() {
  return (
    <section className="dSection">
      <div>
        <h2>Deployed Projects</h2>
      </div>
      <div className="container">
        <div className="card-p-one">
          <a href="https://ifitnut.herokuapp.com/" target="blank"><img src={iFitNut} alt=" Project 1: iFitNut" width="100%" /></a>
          <h3>iFitNut</h3>
          <p>This app is for the health conscious individual. A way to record your fitness progress, so that you can view personal historical data and remain motivated in reaching your goals.</p>
        </div>
        <div className="card-p-two">
          <a href="https://seifenan.github.io/Project-1-Bored-Genie/" target="blank"><img src={boredGenie} alt=" Project 2: Bored Genie" width="100%" /></a>
          <h3>Bored Genie</h3>
          <p>This is a wellness appication that allows the user to randomly select an activity to stimulate either the mind or the body.</p>
          <p> We also included a fun feature to allow the User to document, and journal down their favorite ideas.</p>
        </div>
        <div className="card-p-three">
          <a href="https://seifenan.github.io/c3-password-generator/" target="blank"><img src={passGen} alt=" Project 3: Password Generator" width="100%" /></a>
          <h3>Password Generator</h3>
          <p>An average Password can be guessed by the average user or be vulnerable to brute-force attacks.</p>
          <p>Using a combination of random uppercase and lowercase alphabets, as well as, numbers and special characters in your Password, increases its strength and prevents malicious users from getting in!</p>
        </div>
        <div className="card-p-four">
          <a href="https://seifenan.github.io/c6-weather-dashboard/" target="blank"><img src={weatherDash} alt=" Project 4: Weather Dashboard" width="100%" /></a>
          <h3>Weather Dashboard</h3>
          <p>This weather app allows users to access weather information for multiple cities and plan a trip accordingly.</p>
        </div>
        <div className="card-p-five">
          <a href="https://seifenan.github.io/c5-work-day-scheduler/" target="blank"><img src={wdScheduler} alt=" Project 5: Work Day Scheduler" width="100%" /></a>
          <h3>Work Day Scheduler</h3>
          <p>It is very easy to miss out on important events or even simple tasks. It is crucial to use some form of planner or log to help keep you organized and on task.</p>
        </div>
        <div className="card-p-six">
          <a href="https://seifenan.github.io/c4-code-quiz/" target="blank"><img src={cQuiz} alt=" Project 6: Code Quiz" width="100%" /></a>
          <h3>Code Quiz</h3>
          <p>This is a responsive Quiz that will provide feedback with each question response, and allows user to save or reset highscores.</p>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;
