import React from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './pages/login/login';

function App() {
  return (
   <Router>
    <Switch>
       <Route path="/" component={Login} />
       
    </Switch>
   </Router>
  );
}

export default App;
