import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nav from './Nav'
import Header from './Header'
import {useEffect, useState} from 'react'
import {Route,Switch} from 'react-router-dom'
import About from './About'
import NewMovie from './NewMovie'
import FunFacts from './FunFacts'


function App() {
  const [movies, setMovies] = useState([])
  const [movieData, setMovieData] = useState({
    id: '',
    title: '',
    image: '',
    release_year: 0,
    description: ''
  })

  useEffect(() => {
    fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(movieData => setMovies(movieData))
  },[])
  
  function handleSubmit(event) {
    event.preventDefault()
    fetch('http://localhost:3000/movies',{
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application.json"
      },
      body: JSON.stringify(movieData)
    })
    .then(response => response.json())
    .then(newMovie => setMovies([...movies, newMovie]))
  }

  function handleChange(event) {
    if(event.target.name==='release_year') {
      setMovieData({...movieData, [event.target.name]: Number(event.target.value)})}
    else {
      setMovieData({...movieData, [event.target.name]: event.target.value})}
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <Switch>
        <Route exact path = "/">
        <main>
          <Nav movies = {movies}/>
          <NewMovie handleSubmit ={handleSubmit} handleChange={handleChange}/>
        </main>
        </Route>
        <Route path = "/about">
          <About />
        </Route>
        <Route path = "/new-movie">
          <NewMovie handleSubmit={handleSubmit} handleChange={handleChange}/>
          <FunFacts/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
