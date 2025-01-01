import { Button } from '@/Components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { FcShare } from "react-icons/fc";




function InfoSection({trip}) {

    const [photoUrl,setPhotoUrl]=useState();

    useEffect(()=>{
        trip && GetPlacePhoto();
    },[trip])

    const GetPlacePhoto=async()=>{
        const data={
            textQuery:'view of'+trip.userSelection?.location?.label
        }
        const result=await GetPlaceDetails(data).then(resp=>{
            console.log(resp.data.places[0].photos[3].name);

            const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
            setPhotoUrl(PhotoUrl)
        })
    }


  return (
    <div>
        <img src={photoUrl} alt="" className='h-[340px] w-full object-cover rounded-xl'/>

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

export default InfoSection;
