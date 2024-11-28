import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 
      className='font-extrabold text-[45px] text-center mt-16'>
        <span className='text-[#2531be]'>Discover Your Next Adventure With AI : </span>Personalized Itinearies at Your Fingertips</h1>
      <p className='text-xl text-gray-500 text-center'>Your Personal Trip Planner and Travel curator, creating custom itineraies tailored to your interests and budget</p>
      <Link to={'/createTrip'}>
      <Button>Get Started, It's Free</Button>
      </Link>
    </div>
  )
}

export default Hero
