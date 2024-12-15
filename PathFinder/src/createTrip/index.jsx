import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { Input } from '@/Components/ui/input';
import { useState, useEffect } from 'react';
import { AI_PROMPT, SelectBudgetOptions } from '@/constants/options';
import { SelectTravelsList } from '@/constants/options';
import { Button } from '@/Components/ui/button';
import { toast } from "sonner"
import { chatSession } from '@/service/AIModel';

function CreateTrip() {
  const [place,setPlace]=useState();

  const [formData,setFormData] = useState([]);

  const handleInputChange = (name,value)=>{
    setFormData({
      ...formData,
      [name]:value
    })
  }

  useEffect(()=>{
    console.log(formData);
  },[formData])

  const onGenerateTrip=async()=>{
    if(formData?.noOfDays>10 &&! formData?.location||!formData?.budget||!formData?.traveller){
      toast("Please Fill all Details.")
      return;
    }
    const FINAL_PROMPT=AI_PROMPT
    .replace('{location}',formData?.location?.label)
    .replace('{totalDays}',formData?.noOfDays)
    .replace('{traveler}',formData?.traveller)
    .replace('{budget}',formData?.budget)
    .replace('{totalDays}',formData?.noOfDays)

    console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);

    console.log(result?.response?.text());
  }

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl text'>
        Tell Us Your Travel Preferences 🚀
      </h2>
      <p className='mt-3 text-gray-500 text-xl'>
        Just provide some basic information, and our trip planner will generate a Customised itinerary based on your preferences.
      </p>


      <div className='mt-20 flex flex-col gap-10 text'>
{/* SELECT PLACE */}
        <div>
          <h2 className='text-xl my-3 font-medium'>
            What is your Choice of Destination?
          </h2>
          <GooglePlacesAutocomplete
          apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
          selectProps={{
            place,
            onChange:(v)=>{setPlace(v); handleInputChange('location',v)}
          }}/>
        </div>
{/* SELECT NO. OF DAYS */}
        <div>
          <h2 className='text-xl my-3 font-medium'>
            How many days are you planning your trip?
          </h2>
          <Input placeholder={'Ex : 3'} type="number"
            onChange={(e)=>handleInputChange('noOfDays',e.target.value)}
          />
        </div>
      

{/* SELECT BUDGET */}
      <div>
        <h2 className='text-xl my-3 font-medium'>
            What is your Budget?
        </h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectBudgetOptions.map((item,index)=>(
            <div key={index} 
              onClick={()=>handleInputChange('budget',item.title)}
            className={`p-4 border rounded-lg 
              hover:shadow-lg cursor-pointer
              ${formData?.budget==item.title&&'shadow-lg border-black'}
              `}>
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
            <div key={index}
            onClick={()=>handleInputChange('traveller',item.people)}
            className={`p-4 border rounded-lg 
              hover:shadow-lg cursor-pointer
              ${formData?.traveller==item.people&&'shadow-lg border-black'}
            `}>
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
      <Button onClick={onGenerateTrip}>Generate Trip</Button>
      </div>

    </div>
  )
}

export default CreateTrip
