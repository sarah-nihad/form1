import React ,{Component} from 'react';

import {BrowserRouter} from 'react-router-dom';
 import Form from './component/form'

import './App.css';
class App extends Component{
render() {
  return (
    <BrowserRouter>
    <div className="App">
    
   
     <Form /> 
    </div>
    </BrowserRouter>
  );
}}

export default App;
