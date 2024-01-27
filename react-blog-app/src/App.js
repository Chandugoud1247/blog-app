import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Education from './pages/category/Education'; // Import your Education component
import Health from './pages/category/Health'; // Import your Health component
import Food from './pages/category/Food'; // Import your Food component
import Sports from './pages/category/Sports'; // Import your Sports component
import Write from "./pages/write/Write";
import About from "./pages/About/About"; // Corrected import
import Contact from "./pages/Contact/Contact"; // Corrected import
import Sidebar from "./components/sidebar/Sidebar"; // Added import for Sidebar
import SinglePost from "./components/singlePost/SinglePost";

function App() {
  const user = true;

  return (
    <Router>
      <Topbar />
      <div className="container">
       
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        <Route path="/category/education">
          <Education />
        </Route>
        <Route path="/category/health">
          <Health />
        </Route>
        <Route path="/category/food">
          <Food />
        </Route>
        <Route path="/category/sports">
          <Sports />
        </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            {user ? <Login /> : <Login />}
          </Route>
          <Route path="/write">
            {user ? <Write /> : <Register />}
          </Route>
          <Route path="/settings">
            {user ? <Settings /> : <Register />}
          </Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
          <Route >< SinglePost /></Route>
          <Route><Sidebar /> </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
