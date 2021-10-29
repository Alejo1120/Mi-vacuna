import React from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';

function App() {
  return (
   <Router>
    <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/register" component={Register} />
       <Route path="/login" component={Login} />
       
    </Switch>
   </Router>
  );
}

export default App;
