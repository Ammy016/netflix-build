import React , { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen'
import Login from "./screens/login/Login"
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen"
import { auth }  from './firebase'
import { useDispatch , useSelector} from 'react-redux'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { selectUser , login , logout } from './features/userSlice';

function App() {
  const user = useSelector(selectUser )
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){ 
        dispatch(
          login({
            uid : userAuth.uid,
            email : userAuth.email,
          })
        )
      }else{
        dispatch(logout)
      }
    })
    return unsubscribe
    
  }, [])

  return (
    <div className="App">
     <Router>
        
          { user ? (
           <Switch> 
            <Route path='/profile'>
              < ProfileScreen />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
           </Switch>) : <Login />}
       
    </Router>
    </div>
  );
}

export default App;
