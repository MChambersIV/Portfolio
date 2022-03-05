import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';


function Main() {

    return <div className="bg-dark text-light">
              <Nav />
                <Contact />
                <Projects />
              <Footer />
           </div>
}

export default Main;