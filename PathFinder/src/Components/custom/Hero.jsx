import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


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

      <Carousel className='pt-5'>
        <CarouselContent className='-mt-20 mb-20'>
          <CarouselItem><img src="/c1.png" alt="" /></CarouselItem>
          <CarouselItem><img src="/c2.png" alt="" /></CarouselItem>
          <CarouselItem><img src="/c0.png" alt="" /></CarouselItem>
          <CarouselItem><img src="/c3.png" alt="" /></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </div>
  )
}

export default Hero
