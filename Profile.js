import React from 'react';
import logo from '../logo.svg';
import './profile.css'

const profile = (props) => {
   let {src}=props;
return(
    <div>
     <img src={"props.logo"} className={"pic"} src={logo}/>
     <h1>{props.profile}</h1>
    </div>
);
};

export default profile;