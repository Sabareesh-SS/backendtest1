import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <div>
    <Button onClick={()=> navigate('/')}>Home</button>
    <Button onClick={()=> navigate('/About')}>About</button>
    </div>
  )
}
