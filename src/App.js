import './App.css';
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navigation/Navbar'
import Footer from './Footer/Footer'
import About from './About/About'
import Projects from './Projects/Projects'
import Connect_4 from './Projects/Connect_4/Connect_4'


class App extends Component
{
  render()
  {
    return (
      <div className='content'>
        <div className='content-wrap'>
        
          <HashRouter>
              <Navbar />
              <Switch>
                <Route path='/about' component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/connect_4" component={Connect_4} />
                <Route path="/*" component={Home} />
              </Switch>


          </HashRouter>
        
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
