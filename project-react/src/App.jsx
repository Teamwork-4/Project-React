import React, {Fragment, useState} from "react";
import {Link, Route, Switch} from "react-router-dom"
import Daypass from "./components/Daypass.jsx"
import Login from "./components/Login.jsx"
import Home from "./components/Home.jsx"

export default function App() {

  var [clase, setClase] = useState("animation start-home")
  return (

<Fragment>
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

          <a onClick={() => setClase(clase = "animation start-home")} href="."><Link to="/">Home</Link></a>
          <a onClick={() => setClase(clase = "animation start-about")} href="."><Link to="/daypass">Pasadías</Link></a>
          <a onClick={() => setClase(clase = "animation start-blog") } href="."><Link to="/login">Login</Link></a>
    
      <div id="selector" class={clase}></div>
          
      </nav>

        <Switch>

          <Route exact path="/"> <Home/></Route>
          <Route path="/daypass"> <Daypass/></Route>
          <Route path="/login"> <Login/></Route>

        </Switch>
     
        <nav class="navbar fixed-bottom navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Diseñado por: Equipo 4</a>
          </div>
        </nav>
    </div>
    </Fragment>
  );
}



