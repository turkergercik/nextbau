"use client"
import React, { useEffect, useState,useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
//import { Autoplay, Pagination, Navigation,Controller,FreeMode ,EffectCoverflow,EffectCards} from "swiper/modules";
import { Autoplay,Pagination,Navigation,Controller,EffectCoverflow,EffectCards,Zoom } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/controller";
import "swiper/css/navigation";
import "swiper/css/zoom";

export default function Carousel({images}){
    console.log(images)
    const swiperref  = useRef(null)
    if(images){

    
    return(
        <>
        {images.length!==0 && <div className="bg-gray-900  w-full h-1/2 flex justify-center border-y-2 p-3 items-center">
            {/* <button onClick={() => swiperRef.current?.slidePrev()}>Prev</button> */}
              <Swiper
              initialSlide={1}
               onBeforeInit={(swiper) => {
                swiperref.current=swiper
              }}
              draggable={false}
              effect="coverflow"
              coverflowEffect={{
                rotate: 35,
                stretch: 0,
                depth: 100,
                scale:0.7,
                modifier: 1,
                slideShadows: false,
              }}
              zoom={true}
              pagination={{
                clickable: true,
                dynamicBullets:true,
              
              }}
              slidesPerView={images.length <=3 ? 1.5:"auto"}
                navigation={false}
                slideToClickedSlide
                centeredSlides
                
                autoplay={{delay:2500,stopOnLastSlide:false,disableOnInteraction:false }}
              loop
                breakpoints={{
                  100: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                  },
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  
                  640: {
                    slidesPerView: 2.5,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                
                className=" w-full h-full"
               
                modules={[Zoom,Autoplay,Navigation,EffectCoverflow]}
              >
                {images?.map((image,index) => (
                  <SwiperSlide
                    key={index}
                    className="  "
                  >
                    <div className=" h-full bg-gray-900 w-full flex items-center justify-center">
                        {image.type==="image" ?  <img
                        className="object-cover rounded-2xl h-full  w-full " // Rounded corners applied to the image
                        src={image.transformedUrl}
                        alt={image.name}
                      />:<video
                      muted
                      controls
                      onPlay={()=>{swiperref.current.autoplay.stop()}}
                      onPause={()=>{swiperref.current.autoplay.start()}}
                      className="w-full h-full bg-gray-900 rounded-2xl object-cover"
                      >
                         <source src={image.transformedUrl} type="video/mp4" />
                      </video>
                    
                        }
                     
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* <button onClick={() => swiperRef.current?.slideNext()}>Next</button> */}
            </div>}
            </>
    )
}
}