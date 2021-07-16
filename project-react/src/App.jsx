import React from "react";
import {Link, Route, Switch} from "react-router-dom"
import Daypass from "./components/Daypass.jsx"
import Login from "./components/Login.jsx"

const Home = () => (

  <div>
    <h2>Home</h2>
  </div>

);

export default function App() {
  return (



    <div className="App">

      <nav class="navbar navbar-expand-lg navbar-light bg-light">

      <form class="container-fluid justify-content-start">
        <button class="btn btn-sm btn-outline-success me-2 active" type="button">Viajeros</button>
        <button class="btn btn-sm btn-outline-secondary" type="button">Aliados</button>
      </form>

        <span class="navbar-text">
          <h2>Pasadías</h2>
        </span>

      </nav>
      <nav class="menu">
          <a href="document.getElementById('selector').removeClass('rojo')"><Link to="/">Home</Link></a>
          <a href="document.getElementById('selector').removeClass('start');"><Link to="/daypass">Pasadías</Link></a>
          <a href="document.getElementById('selector').className = 'start-blog'"><Link to="/login">Login</Link></a>
    
          <div id="selector" class="animation start-home"></div>
      </nav>

        <Switch>

          <Route exact path="/"> <Home/></Route>
          <Route path="/daypass"> <Daypass/></Route>
          <Route path="/login"> <Login/></Route>

        </Switch>
     
    </div>
  );
}

