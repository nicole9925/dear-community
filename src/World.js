import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var perf =require('./world.html');

class World extends React.Component {
   render(){
      return (
         <iframe src={perf }></iframe>
      );
   }
}
export default World;