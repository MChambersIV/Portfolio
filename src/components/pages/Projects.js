import React from "react";

import SoundLane from '../images/SoundLane.png';
import PerfectCup from '../images/PerfectCup.png';
import WeatherDashboard from '../images/WeatherDashboard.png';
import FriendlyFriend from '../images/frfr.png'
import PerrilousQuestions from '../images/start.png'
import PlanAway from '../images/ws1.jpg'

function Projects() {
    return (
        <div className="d-grid gap-3">
      
        <div className="card mb-3 bg-dark text-light">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={PerfectCup} class="img-fluid rounded-start border border-white" alt="Perfect Cup Homepage"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Perfect Cup</h5>
              <p className="card-text">Perfect Cup is the most recent project I completed as part of a small team. It allows a user to create an account and then create their ideal coffee from a list of ingredients. Then they can learn about about their coffee once it's created.</p>
              <a href="https://powerful-wildwood-54385.herokuapp.com" class="btn btn-primary">Visit</a>
              <a href="https://github.com/MChambersIV/Perfect-Cup" class="btn btn-success">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 bg-dark text-light">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={SoundLane} class="img-fluid rounded-start border border-white" alt="Sound Lane Homepage"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Sound Lane</h5>
              <p className="card-text">This is a musical artist information aggregate I built as part of a team using multiple 3rd party APIs. Really happy with this one because of it's daily use case. Always love to build something truly functional.</p>
              <a href="https://samuellutz.github.io/Sound-Lane/" class="btn btn-primary">Visit</a>
              <a href="https://github.com/MChambersIV/Sound-Lane" class="btn btn-success">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 bg-dark text-light">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={WeatherDashboard} class="img-fluid rounded-start border border-white" alt="Weather Dashboard landing page"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Accurate Weather</h5>
              <p className="card-text">This is a weather dashboard essentially. On site load you can type in the name of any City and get the current weather and a 5 day forecast using the OpeanWeather API.</p>
              <a href="https://mchambersiv.github.io/AccurateWeather-WD/" class="btn btn-primary">Visit</a>
              <a href="https://github.com/MChambersIV/AccurateWeather-WD" class="btn btn-success">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 bg-dark text-light">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={FriendlyFriend} class="img-fluid rounded-start border border-white" alt="Weather Dashboard landing page"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Friendly Friend</h5>
              <p className="card-text">This is an API for the backend of a Social Network. As it is just an API it requires a tool to test the routes that interact with the database.</p>
              <a href="https://watch.screencastify.com/v/dnU3Hdek4wUWkbjCO9QZ" class="btn btn-warning">Walkthrough</a>
              <a href="https://github.com/MChambersIV/FriendlyFriend-Social-Network-API" class="btn btn-success">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 bg-dark text-light">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={PerrilousQuestions} class="img-fluid rounded-start border border-white" alt="Weather Dashboard landing page"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">PerrilousQuestions</h5>
              <p className="card-text">This very simple quiz was my first foray into JavaScript and while it's a bit crude it shows how far I've come in a short amount of time. It has a particularly fun name too.</p>
              <a href="https://mchambersiv.github.io/PerrilousQuestions-CQ-wAPI/" class="btn btn-primary">Visit</a>
              <a href="https://github.com/MChambersIV/PerrilousQuestions-CQ-wAPI" class="btn btn-success">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 bg-dark text-light">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={PlanAway} class="img-fluid rounded-start border border-white" alt="Weather Dashboard landing page"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Plan Away</h5>
              <p className="card-text">When you load the page you will see the title and the current time. You will also see forms to save todo's for the current workday from 8am all the way to 5pm.</p>
              <a href="https://mchambersiv.github.io/PlanAway-DP-WA/" class="btn btn-primary">Visit</a>
              <a href="https://github.com/MChambersIV/PlanAway-DP-WA" class="btn btn-success">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    )
}

export default Projects;