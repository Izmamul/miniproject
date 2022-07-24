import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import{Switch , Route } from "react-router-dom";
import {Home} from "./Home";
import {Contact} from "./Contact";
import {Service} from "./Service";
import {About} from "./About";
import {Navbar} from "./Navbar";
import { Redirect } from "react-router-dom";
import { Footer } from "./Footer";



const App = () =>{
  return(
    <>
    <Navbar/>
    <Switch>
   
 
    <Route exact path ="/" component={Home}/>
    <Route exact path ="/About" component={About}/>
  <Route exact path ="/Contact" component={Contact}/>
  <Route exact path ="/Service" component={Service}/>
  <Redirect to="/"  ></Redirect>
  
</Switch>
<Footer/>

    </>
  );
};

export{App};

