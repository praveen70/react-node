import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Login  from './component/login/login';
import Home from './component/home/index';
import Register from './component/registerStudent/registerStudent'

import CreateEmployee from './component/createEmployee/createEmployee';
import Takeattendace from './component/takeAttendance/takeAttendance'
import Viewattendace from './component/viewAttendance/viewAttendance';


const Root =() =>(
  <div>
   <Router>
   <Switch>
    

      <Route exact path="/" component={Login} />
      {/* <Route path='/layout' component={Layout} /> */}
      <Route path="/createEmployee" component={CreateEmployee} />
      <Route path="/home" component={Home} />
      <Route path="/registerStudent" component={Register} />
      <Route path="/takeAttendace" component={Takeattendace} />
      <Route path="/Viewattendace" component={Viewattendace} />
     
      
      
      </Switch>
      </Router>
      </div>
);

//const RootWithSession = withSession(Root);


export default Root;
