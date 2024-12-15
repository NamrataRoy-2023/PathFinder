import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { Input } from '@/Components/ui/input';
import { useState } from 'react';
import { SelectBudgetOptions } from '@/constants/options';
import { SelectTravelsList } from '@/constants/options';
import { Button } from '@/Components/ui/button';

function CreateTrip() {
  const [place,setPlace]=useState();
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>
        Tell Us Your Travel Preferences 🚀
      </h2>
      <p className='mt-3 text-gray-500 text-xl'>
        Just provide some basic information, and our trip planner will generate a Customised itinerary based on your preferences.
      </p>


      <div className='mt-20 flex flex-col gap-10'>
{/* SELECT PLACE */}
        <div>
          <h2 className='text-xl my-3 font-medium'>
            What is your Choice of Destination?
          </h2>
          <GooglePlacesAutocomplete
          apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
          selectProps={{
            place,
            onChange:(v)=>{setPlace(v);console.log(v)}
          }}/>
        </div>
{/* SELECT NO. OF DAYS */}
        <div>
          <h2 className='text-xl my-3 font-medium'>
            How many days are you planning your trip?
          </h2>
          <Input placeholder={'Ex : 3'} type="number"/>
        </div>
      

{/* SELECT BUDGET */}
      <div>
        <h2 className='text-xl my-3 font-medium'>
            What is your Budget?
        </h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectBudgetOptions.map((item,index)=>(
            <div key={index} className='p-4 border rounded-lg hover:shadow-lg cursor-pointer'>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

{/* SELECT TRAVELLER INFORMATION */}
      <div>
        <h2 className='text-xl my-3 font-medium'>
            Who do you Travelling with on your next Adventure?
        </h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectTravelsList.map((item,index)=>(
            <div key={index} className='p-4 border rounded-lg hover:shadow-lg cursor-pointer'>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      </div>

{/* BUTTON */}
      <div className='my-10 justify-end flex'>
      <Button>Generate Trip</Button>
      </div>

    </div>
  )
}

export default CreateTrip
