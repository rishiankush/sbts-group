import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import AppIndex from './components/index';
import './App.css';
import './assets/css/customAnimation.css';
import services from './components/services';
import careers from './components/careers';
import media from './components/media';
import contactus from './components/contactus';

function App() {
  return (
    <Router>
      <div className='App'>
      <Switch>
        <Route path="/" exact component={AppIndex} />
        <Route path="/services" component={services} />
        <Route path="/careers" component={careers} />
        <Route path="/media" component={media} />\
        <Route path="/contactus" component={contactus} />
     </Switch>
    </div>
  </Router>
  );
}

export default App;
