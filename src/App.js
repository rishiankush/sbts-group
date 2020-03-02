import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import AppIndex from './components/index';
import './App.css';
import './assets/css/customAnimation.css';
import services from './components/services';


function App() {
  return (
    <Router>
      <div className='App'>
      <Switch>
        <Route path="/" exact component={AppIndex} />
        <Route path="/services" component={services} />
     </Switch>
    </div>
  </Router>
  );
}

export default App;
