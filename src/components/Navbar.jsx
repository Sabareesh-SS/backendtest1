import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <div>
    <button onClick={()=> navigate('/')}>Home</button>
    <button onClick={()=> navigate('/About')}>About</button>
    </div>
  )
}
