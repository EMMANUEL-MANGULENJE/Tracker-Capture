import React, { Component } from 'react';
/*import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componets/Navbar';
import {Button, Form, FormGroup, Label, Input} from "reactstrap";*/



class login extends Component{
  render(){
    return(
        <div>
  <form className ="log-in">
  <FormGroup>
      <label><h3>Email</h3></label>
      <input type = "email" placeholder = " please enter your Email"></input>
  </FormGroup>

  <FormGroup>
      <label><h3>Password</h3></label>
      <input type = "Password" placeholder = " please enter your password"></input>
  </FormGroup>

  <Button className ="btn-lg btn-dark btn block">log in </Button>
  </form>
        </div>);
    }

        }

        

export default login;

