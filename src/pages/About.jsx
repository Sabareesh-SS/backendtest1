import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigate=useNavigate()
  return (
    <div>
      About page
      <button onClick={()=>navigate('/')}>back</button>
    </div>
  )
}
