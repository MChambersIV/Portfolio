import React from 'react';
import Self from '../images/self.jpg'

function About() {
    return (
    <div>   
        <img  style={{ width: "15%", height: "15%" }} src={Self} alt="Portrait of Myself"/> 
        <p>My name is Millard Chambers and I'm an apsiring Software Developer.</p>
        <p>I grew up all around the San Francisco Bay Area, exposing me to cultures and ways of life as varied as the people that people that make the Bay Area what it is.</p>
        <p>Of course the Bay Area isn't just a bountiful cultural center, or perhaps because it is so, it's home to the foremost high technology hub of the world.</p>
        <p>Watching the rapid pace of technology's advancement and how it improve the lives of people the world over because of talented and dedicated individuals inspired me journey down this path help leave it better than I found it.</p>
        <p>For you consideration, I have included a few of my works to showcase some of the skills I've honed that would make me a valuable member of your team.</p>
        
    </div>
    )
}

export default About;