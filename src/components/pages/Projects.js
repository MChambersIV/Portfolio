import React from "react";

import SoundLane from '../images/SoundLane.png';
import PerfectCup from '../images/PerfectCup.png';
import WeatherDashboard from '../images/WeatherDashboard.png';

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
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text">This is as the name suggests, a weather dashboard, on site load you can type in the name of any City and get the current weather and a 5 day forecast using the OpeanWeather API.</p>
              <a href="https://mchambersiv.github.io/weather-dashboard/" class="btn btn-primary">Visit</a>
              <a href="https://github.com/MChambersIV/weather-dashboard" class="btn btn-success">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    )
}

export default Projects;