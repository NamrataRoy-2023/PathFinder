import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { Input } from '@/Components/ui/input';
import { useState, useEffect } from 'react';
import { AI_PROMPT, SelectBudgetOptions } from '@/constants/options';
import { SelectTravelsList } from '@/constants/options';
import { Button } from '@/Components/ui/button';
import { toast } from "sonner"
import { chatSession } from '@/service/AIModel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from 'axios';



function CreateTrip() {
  const [place,setPlace]=useState();

  const [formData,setFormData] = useState([]);
  const [openDailog,setOpenDailog] = useState(false);

  const[loading,setLoading]=useState(false);

  const handleInputChange = (name,value)=>{
    setFormData({
      ...formData,
      [name]:value
    })
  }

  useEffect(()=>{
    console.log(formData);
  },[formData])

  const login=useGoogleLogin({
    onSuccess:(codeResp)=>GetUserProfile(codeResp),
    onError:(error)=>console.log(error)
  })

  const onGenerateTrip=async()=>{

    const user=localStorage.getItem('user');
    if(!user){
      setOpenDailog(true);
      return;
    }

    if(formData?.noOfDays>10 &&! formData?.location||!formData?.budget||!formData?.traveller){
      toast("Please Fill all Details.")
      return;
    }
    setLoading(true);
    const FINAL_PROMPT=AI_PROMPT
    .replace('{location}',formData?.location?.label)
    .replace('{totalDays}',formData?.noOfDays)
    .replace('{traveler}',formData?.traveller)
    .replace('{budget}',formData?.budget)
    .replace('{totalDays}',formData?.noOfDays)

    // console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);

    console.log("--",result?.response?.text());
    setLoading(false);
    SaveAiTrip(result?.response?.text());
  }

  const SaveAiTrip=async(TripData)=>{
    setLoading(true);
    const user=JSON.parse(localStorage.getItem('user'));
    const docId=Date.now().toString();
    // Add a new document in collection "cities"
    await setDoc(doc(db, "AITrips", docId), {
      userSelection:formData,
      tripData:JSON.parse(TripData),
      userEmail:user?.email,
      id:docId
    });
    setLoading(false);
  }

  const GetUserProfile=(tokenInfo)=>{
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,{
      headers:{
        Authorization:`Bearer ${tokenInfo?.access_token}`,
        Accept:'Application/json'
      }
    }).then((resp)=>{
      console.log(resp);
      localStorage.setItem('user',JSON.stringify(resp.data));
      setOpenDailog(false);
      onGenerateTrip();
    })
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
      <Button
      disabled={loading}
      onClick={onGenerateTrip}>
      {loading?
      <AiOutlineLoading3Quarters className='h-7 w-7 animate-spin'/>:'Generate Trip'
      }
        </Button>
      </div>

      <Dialog open={openDailog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" />
              <h2 className='font-bold text-lg mt-7'>Sign In With Google</h2>
              <p>Sign in to the App with Google Authentication Securely.</p>

              <Button
              onClick={login}
              className='w-full mt-5 flex gap items-center'>
                
                  <FcGoogle className='w-8 h-8'/>
                  Sign In with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>


    </div>
  )
}

export default CreateTrip
