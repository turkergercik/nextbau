
"use client"
import React, { useEffect, useState } from 'react'
import { createClient } from 'contentful'
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useRouter } from 'next/navigation';
const sid="h7ad3r48qk3t"
const at ="qvYt_tcie5ni9ozEnmc4QQJuLSy2k-nvA6hDaiZY2YE"
function Page() {
    const router = useRouter()
    const [data,setdata]=useState([])
    useEffect(()=>{
        const rt = async()=>{
            try {
                const res = createClient({
                     space:sid,
                     accessToken:at
                  })
               const res1= await res.getEntries({content_type:"blog"})
               console.log(res1.items[0])
               setdata(res1.items)
             } catch (error) {
                 console.log(error)
             }

        }
        rt()

    },[])
  
   
   
    

   

  return (
    <div className='flex justify-center items-center bg-gray-900 flex-col gap-2 h-full'>
    {
        data.map((item,index)=>{
              return <button onClick={()=>{router.push(`/academy/articles/${item.sys.id}`)}} key={index} className='bg-gray-500 w-1/3 rounded-xl flex flex-row  items-center justify-start h-1/6'>
                
                <img className='w-20 h-20 pl-2' src={item.fields.thumbnail.fields.file.url}></img>
                <span className='w-full text-center'> {item.fields.title}</span>
               
                  
                </button>
        })
    }
   
    
    </div>
  )
}

export default Page