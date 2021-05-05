import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen'
import Login from "./screens/login/Login"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const user = false;
  return (
    <div className="App">
     <Router>
        <Switch>

          { user ? (<Route path="/">
            <HomeScreen />
          </Route>) : <Login />}
        </Switch>
    </Router>
    </div>
  );
}

export default App;
