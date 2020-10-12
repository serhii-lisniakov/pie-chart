import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import FormPage from './FormPage/FormPage'
import ChartPage from './ChartPage/ChartPage'
import Header from './Header/Header';

function App() {
  return (
      <div className="container">
        <Router basename={'/pie-chart'}>
        <Header/>
          <Route exact path="/" render={() => <Redirect to="/home"/>}/>
          <Route path={'/home'} render={() => <FormPage />} />
          <Route path={'/chart'} render={() => <ChartPage />} />
        </Router>
      </div>
  );
}

export default App;
