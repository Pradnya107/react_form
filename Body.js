import React from 'react';
import './body.css';

const Body = (props) => {
return (
    <div className={"body"} >

  <h3 >{props.name}</h3>
  <h3 >COLLEGE: SIESGST </h3>
  <h3 >BRANCH: Computer Science</h3>
    </div>
);
};
export default Body;