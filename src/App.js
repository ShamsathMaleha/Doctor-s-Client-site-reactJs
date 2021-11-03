
import './App.css';
import {BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import Home from './Pages/HomePage/Home/Home';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/about">

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
