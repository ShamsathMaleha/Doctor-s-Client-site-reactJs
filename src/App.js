
import './App.css';
import {BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import Home from './Pages/HomePage/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/appointment">
          <Appointment></Appointment>
         </Route>
         <Route exact path="/home">
                <Home></Home>
         </Route>
         <Route exact path="/">
            <Home></Home>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
