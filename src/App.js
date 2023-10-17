/* 
   Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  React Router Boiler Plate 
   FE Lab Week 16
*/

import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'

import Home from './Components/Home.js'
import About from './Components/About.js'
import Contact from './Components/Contact.js'
import NavBar from './Components/NavBar.js'
import Footer from './Components/Footer.js'
import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Card from 'react-bootstrap/Card';
// import Table from './Components/Table.js';
// import Form from './Components/Form.js'
import './App.js'

/** Instruction:
 *    This is a boiler plate, or a "starting point" for React Router.
 *    This boiler plate uses React Router 5.3. You MUST read and use the documentation
 *       for React Router 5.3 if you decide to use this boiler plate.
 *
 *    You are not required to use RR 5.3 for your final.
 *    You may use this boiler plate for your final if you want to.
 *
 */

/*------------------------ Creating a New Route ------------------------*/

/**
 * Step 1: npm install to install your node_modules folder
 * Step 2: npm start inside this project directory to see how the boiler plate is already set up.
 * Step 3: Rename: the Home and About components & routes to something you want
 *         to use for your final.
 * Step 4: Connect a third component so your nav now goes to three places instead
 *         of just two.
 *
 *         Make sure for this new component you have done the following:
 *           - Create a new <li></li> element in your nav component.
 *           - Put a <Link> component in that element with a name, and a to attribute.
 *           - Create a new <Route> component inside of your <Switch> component.
 *               It should sit on the upper level of the other two <Route> components.
 *               Make sure the syntax is the same as the other two components.
 *           - Test to make sure that all three components navigate correctly.
 */

export default function App(updateArtist,postNewArtist) {
  const [artists,setArtists] = useState([{}]);

  let URL = 'https://64f168df0e1e60602d23c0eb.mockapi.io/artists'

  const [newName, setNewName] = useState('');
  const [newPicture, setNewPicture]=
  useState('');
  const [newCity, setNewCity]=
  useState('');
  const [newDate, setNewDate]=
  useState('');
  const [updatedName, setUpdatedName]=
  useState('');
  const [updatedPicture, setUpdatedPicture]= useState('');
  const [updatedCity, setUpdatedCity]=
  useState('');
  const [updatedDate, setUpdatedDate]=
  useState('');

  const getArtists = async () => {
    let data = await axios.get (URL)
    console.log(data.data)
    setArtists(data.data)
  }
  useEffect(() => {

  getArtists();

}, [] )

  return (
    // Your entire App.js is the router.
    <>
      {/* This is your Nav element, that users can see. */}
      <div className='page'>
        <NavBar>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </NavBar>
        {/* This is the logic that switches each path.
          1. Give your Route component a path attribute so users know where they are.
              This is linked directly with "to attribute" on your nav above.
          2. Inside that Route component, render the component you want users
              to see when they click on that route.
          <Route path="/">
            <Component/>
          </Route>  */}
        <Routes>
          <Route path="/about" element={<About artists={artists} getArtists={getArtists} updateArtist={updateArtist} postNewArtist={postNewArtist} />}/>
          
            
          

          <Route path="/" element={<Home artists={artists} />}/>
            
          

          <Route path="/contact" element={<Contact />}/>
            


        </Routes>
        <Footer></Footer>
      </div>
   </>
  )
}
