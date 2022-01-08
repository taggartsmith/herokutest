import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Header from './navbar/header';
import Home from './home/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import Weathercall from './pages/weathercall';


export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/Weather' component={Weathercall}/>
          </Switch>

        </div>
      </Router>



      // <div className='app'>
      //   <div className='header-wrapper'>
      //     <div className='header'>
      //       <Header/>
      //     </div>
      //   </div>

      //     <div className='home-container'>
      //       <Home/>
      //     </div>

      // </div>


    );
  }
}
