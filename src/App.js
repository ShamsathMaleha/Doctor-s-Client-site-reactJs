
import './App.css';
import {BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import Home from './Pages/HomePage/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
     <AuthProvider>

     <Router>
       <Switch>
         <PrivateRoute exact path="/appointment">
          <Appointment></Appointment>
         </PrivateRoute>
         <Route exact path="/home">
                <Home></Home>
         </Route>
         <Route exact path="/login">
                <Login></Login>
         </Route>
         <Route exact path="/register">
                <Register></Register>
         </Route>
         <Route exact path="/">
            <Home></Home>
         </Route>
         <Route exact path="/dashboard">
            <Dashboard></Dashboard>
         </Route>
       </Switch>
     </Router>


     </AuthProvider>
    </div>
  );
}

export default App;
