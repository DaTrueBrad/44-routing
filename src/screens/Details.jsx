import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  let {pokemon} = useParams()
  return (
    <div>
      <h1>Details</h1>
      <h2>{pokemon}</h2>
    </div>
  )
}

export default Details