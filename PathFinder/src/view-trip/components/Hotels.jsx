import React from 'react'
import HotelCardItem from './HotelCardItem'


function Hotels({trip}) {
  return (
    <div>
        <h2 className='font-bold text-xl mt-5'>
            Hotel Recomendation
        </h2>

        <div className='mt-1 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
            {trip?.tripData?.hotels?.length>0? trip?.tripData?.hotels?.map((hotel,index)=>(
                <HotelCardItem hotel={hotel} key={index}/>
            ))
            :[1,2,3,4,5,6].map((hotel,index)=>(
              <div key={index} className='h-[220px] w-full bg-slate-200 animate-pulse rounded-xl'>

              </div>
            ))
            }
        </div>

    </div>
  )
}

export default Hotels
