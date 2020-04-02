import './App.css';
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navigation/Navbar'
import Footer from './Footer/Footer'
import About from './About/About'


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
