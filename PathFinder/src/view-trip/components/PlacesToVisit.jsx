import React from 'react'
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({trip}) {
  return (
    <div>

      <h2 className='font-bold text-xl mt-5'>
        Places to Visit
      </h2>

      <div>
        {trip?.tripData?.itinerary.map((item,index)=>(

          <div className='mt-5'>
            <h2 className='font-medium text-lg text-orange-700'>
              {item.day}
            </h2>
            <h2 className='font-sm text-md text-orange-600'>
              Best Time To Visit : {item?.bestTime}
            </h2>
            <div className='grid md:grid-cols-2 gap-5'>
              {item.plan?.length>0? item.plan.map((place,index)=>(
                <div className=''>
                  <PlaceCardItem place={place} key={index}/>
                </div>
              ))
              :[1,2,3,4,5,6].map((item,index)=>(
                <div key={index} className='h-[220px] w-full bg-slate-200 animate-pulse rounded-xl'>
    
                </div>
            ))
              }
            </div>
          </div>

        ))}

      </div>

    </div>
  )
}

export default PlacesToVisit;
