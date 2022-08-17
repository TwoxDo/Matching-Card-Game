import { useState, useEffect,  } from "react";

export const useFetch = (url)=>  {

const [isPending,setIsPending]=useState('false')

const [data , setData]=useState(null)
useEffect(()=>{


const fetchdata =  async()=> {

    setIsPending(true)
    const res = await fetch(url)
    const json = await res.json()
     setIsPending(false)


    setData(json)

}

fetchdata()

},[url])

return{data, isPending}
}

