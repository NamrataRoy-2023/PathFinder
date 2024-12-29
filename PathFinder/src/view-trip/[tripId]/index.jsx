import { db } from '@/service/firebaseConfig';
import { doc } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';

function Viewtrip() {
    const {tripId}=useParams();

    useEffect(()=>{
        tripId && GetTripData();
    },[tripId])

    const GetTripData=async()=>{
        const docRef=doc(db,'AITrips',tripId);
        const docSnap=await getDoc(docRef);

        if(docSnap.exists()){
            console.log("Document:",docSnap.data());
        }
        else{
            console.log("No such document!");
            toast('No Trip Found!');
        }
    }

  return (
    <div>
      Viewtrip:{tripId}
    </div>
  )
}

export default Viewtrip
