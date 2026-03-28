import React, { useContext, useEffect, useRef } from 'react'
import UserDetailContext from '../context/UserDetailContext'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { getAllFav } from '../utils/api'

const useFavourites = () => {


  const {userDetails,setUserDetails} = useContext(UserDetailContext)
   
   const queryRef=useRef()

   const {user} = useAuth0()

   const {data,isLoading, isError,refetch} =useQuery({

    queryKey:["allFavourites"],
    queryFn:() => getAllFav(user?.email,userDetails?.token),
  
    enabled: user !== undefined && !!userDetails?.token,
    staleTime:30000,
    
    
   })
   useEffect(() => {
    if(data && data.length > 0){
      setUserDetails((prev) => ({...prev, favourites: data}))
      localStorage.setItem('favourites', JSON.stringify(data))  // ✅ save to localStorage
    }
  }, [data])

   queryRef.current =refetch

   useEffect(()=>{

    queryRef.current && queryRef.current()
            

   },[userDetails?.token] )

       return {data,isError,isLoading,refetch}

       
  
  
}


export default useFavourites