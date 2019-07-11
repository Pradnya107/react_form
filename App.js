import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Newheader from './Newheader'
import Profile from './Profilefolder/Profile'
import Body from './Bodyfolder/Body'

function App() {
  const element=(
  
  <div>
    <Newheader/>
    <Profile profile={''} src={'logo'}/>
    <Body name={'NAME :Pradnya suryawanshi'}/>
  </div> 

 
  )
 return element;
}

export default App;
