import { Button } from '@/Components/ui/button'
import React from 'react'
import { FcShare } from "react-icons/fc";

function InfoSection({trip}) {
  return (
    <div>
        <img src="/placeholder-image.jpg" alt="" className='h-[340px] w-full object-cover rounded-xl'/>

        <div className='flex justify-between items-center'>
            <div className='my-5 flex flex-col gap-2'>
                <h2 className='font-bold text-2xl'>
                    {trip?.userSelection?.location?.label}
                </h2>

                <div className='flex gap-5'>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-600 md:text-md sm:text-sm'>
                    📅 {trip.userSelection?.noOfDays} Day
                    </h2>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-600 md:text-md sm:text-sm'>
                    💰 {trip.userSelection?.budget} Budget
                    </h2>
                    <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-600 md:text-md sm:text-sm'>
                    🎫 No. of Traveller : {trip.userSelection?.traveller}
                    </h2>
                </div>
            </div>
            <Button><FcShare /></Button>

        </div>
    </div>
  )
}

export default InfoSection
