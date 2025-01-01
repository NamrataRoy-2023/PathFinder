import { Button } from '@/Components/ui/button'
import React from 'react'
import { FaMapMarkedAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

function PlaceCardItem({place}) {
  return (
    
    <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
      <img src="/placeholder-image.jpg" alt="" className='w-[150px] h-[150px] rounded-xl' />
      <div>
        <h2 className='font-bold text-lg'>
            {place.placeName}
        </h2>
        <p className='text-sm text-gray-600'>
            {place?.placeDetails}
        </p>
        <p className='text-sm text-gray-500'>
            Ticket Price : {place?.ticketPricing}
        </p>
        <h2 className='mt-2'>
            ⏳ {place?.timeTravel}
        </h2>
        <h2 className='text-sm'>
            ⭐ {place?.rating}
        </h2>
        <Link to={'https://www.google.com/maps/search/?api=1&query='+place.placeName+","+place?.geoCoordinates} target='_blank'>
            <Button className='my-2' size="sm"> 
                <FaMapMarkedAlt />
            </Button>
        </Link>
      </div>
    </div>
  )
}

export default PlaceCardItem
