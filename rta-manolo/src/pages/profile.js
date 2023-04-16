import Navbar from '../Navbar';
import React, { useState } from 'react';
import './css/home.css'
import Profile from './../Images/profile.png'
import InputBox from './../login/component/InputBox'
import { Button } from '@mui/material';
import { Edit } from '@mui/icons-material';
import People from './../Images/people.png'

const Profiles = () => {

  const [save, setSave] = useState(false)
  const [edit, setEdit] = useState(true)


  return (
    <>
    <Navbar></Navbar>
    <div className='ContainerCss'>
      <div className='InnerContainer'>
      <div style={{position:"absolute", display:"flex", marginLeft: "43.5rem", flexDirection:"column"}}>
        <div>
          <img src={Profile}></img>
        </div>
        <div style={{marginLeft: "-5rem"}}>
          <h1>Jayde Mike Engracia</h1>
        </div>
      </div>
       
        <div style={{marginTop: "30rem", marginLeft: "27rem", position:"absolute", display:"flex"}}>
          <img src={People}></img>
        </div>
        
      </div>
    </div>
    </>
  );
};
  
export default Profiles;