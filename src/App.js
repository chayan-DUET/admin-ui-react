/*import logo from './logo.svg';
import './App.css'; */
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

/* import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/admin/Profile"; */

import MasterLayout from "./layouts/admin/MasterLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/admin" name="Admin" render={(props) => <MasterLayout {...props} />} />
          {/* <Route path="/admin/dashboard" element={<MasterLayout />} /> */}
          {/* <Route exact path="/admin/dashboard" element={<Dashboard />} />
          <Route exact path="/admin/profile" element={<Profile />} /> */}
          {/* <Route path="/admin/dashboard" component={MasterLayout} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
