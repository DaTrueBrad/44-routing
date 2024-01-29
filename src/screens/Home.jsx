import React, { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const searchRef = useRef()
  const navigate = useNavigate()

  const handleClick = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/' + searchRef.current.value)
    .then((res) => {
      console.log(res)
      navigate('/details/' + searchRef.current.value)
    })
    .catch((err) => {
      console.error(err)
    })
  }
  return (
    <div>
      <h1>Home</h1>
      <p>Search for a pokemon</p>
      <input placeholder='Search' ref={searchRef}/>
      <button onClick={handleClick}>Search</button>
    </div>
  )
}

export default Home