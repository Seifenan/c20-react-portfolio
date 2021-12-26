import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Nav';


// import Header from './components/Header';


import About from './components/About';

import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
// import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Nav></Nav>
          <div>
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={ContactForm} />



          </div>
        </div>

      </Router>

      <About></About>
      <ContactForm></ContactForm>

      <Footer></Footer>
    </div>
  );
}

export default App;
