import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Typography, Button, TextField } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

let dummydate = '2022-05-06';
let dummylocation = '90018'

function App() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:5000/api/v1/resources/answers', { params: { location: dummylocation, date: dummydate} }).then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])

  return (
    <Router>
      <div className="App">
        <Grid className="home-wrapper" container>
          <Grid className="title" style={{marginTop: "30px"}} item xs={12}>
            <h1>Dear Community...</h1>
          </Grid>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/play" element={<Home/>}/>
          </Routes>
          {/* <Grid className="gridtest" item xs={12}>            
            {getMessage.status === 200 ? 
            <Typography className="gridtest">{getMessage.data.name}</Typography>
            :
            <Typography className="gridtest">LOADING...</Typography>}
          </Grid> */}
          <Grid className="footnote" style={{margin: "10px"}} item xs={12}>
            <p>Powered by React, Flask, MySQL</p>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

const Home = () => (
  <Grid className="content-wrapper" style={{flexDirection: "column", marginTop: "40px", marginBottom: "100px"}} item xs={12}>
    <p className='content-text'>To start, enter your zipcode!</p>
    <Grid className="button-wrapper" item xs={12}>
      <TextField className="text-field" fullWidth variant="outlined" placeholder='Enter your zip code (eg. 90089)'/>
      <Grid>
        <button class="button-pushable">
          <span class="button-front">
            Start
          </span>
      </button>
      </Grid>
    </Grid>
    <p className='question-text'>Submit a question.</p>
</Grid>
);

export default App;