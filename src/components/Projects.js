import React from 'react';
// import Header from '../Header';
import Portfolio from './Portfolio';

function Project() {
  const projects =[
    {
      id: 0,
      name: 'iFitNut',
      image: '../assets/iFitNut.png',
      info: 'fitnut info',
      liveURL: 'google.com',
      gitHub: 'google.com',
    },
    {
      id: 1,
      name: '',
      image: '',
      info: '',
      liveURL: '',
      gitHub: '',
    }


  ]



 

  return (
    <div>
      <h2>Project</h2>
      <Portfolio projects={projects} />
    </div>
  );
};

export default Project;
