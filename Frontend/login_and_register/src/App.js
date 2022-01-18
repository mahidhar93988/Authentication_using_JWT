// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import {
  Routes,
  Route
} from 'react-router-dom';


const App=()=>{
  return (
      <Routes>
      <Route exact path ='/' element={<Login/>}/>
      <Route exact path='/Registration' element= {<Registration/>}/>
      </Routes>
  );
}

export default App;
