import React from 'react';
import './style.css';
import { Home } from './components/Home.js';
import { AddUser } from './components/AddUser.js';
import { EditUser } from './components/EditUser.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {GlobalProvider} from "./context/GlobalState"
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <div style={{ mawidth: '30rem', margin: '4rem auto' }}>
      <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddUser} />
          <Route path="/edit/id:3" component={EditUser } />
        </Switch>
      </Router>
      </GlobalProvider>

    </div>
  );
};

export default App;
