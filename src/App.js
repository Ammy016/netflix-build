import React , { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen'
import Login from "./screens/login/Login"
import { auth }  from './firebase'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const user = false;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //logged in
        console.log(userAuth);
      }else{

      }
    })
    return unsubscribe
    
  }, [])

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
