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
    
    const swiperRef  = useRef(null)
    if(images){

    
        return (
            <>
              {images.length !== 0 && (
                <div className="bg-gray-900 w-full flex justify-center border-y-2 p-5 items-center">
                  <Swiper
                    initialSlide={1}
                    onBeforeInit={(swiper) => {
                      swiperRef.current = swiper;
                      
                    }}
                    draggable={false}
                    effect="coverflow"
                    coverflowEffect={{
                      rotate: 35,
                      stretch: 0,
                      depth: 100,
                      scale: 0.7,
                      modifier: 1,
                      slideShadows: false,
                    }}
                    zoom={true}
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                    slidesPerView={images.length<=3 ? 1:3} // Always maintain 3 slides per view
                    navigation={false}
                    centeredSlides
                    autoplay={{
                      delay: 2500,
                      stopOnLastSlide: false,
                      disableOnInteraction: false,
                    }}
                    loop
                    
                    className="w-full"
                    modules={[Zoom, Autoplay, Navigation, EffectCoverflow]}
                  >
                    {images?.map((image, index) => (
                      <SwiperSlide
                        key={index}
                        className="flex justify-center items-center"
                      >
                        <div
                          className="flex items-center justify-center rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
                          style={{
                             // Base height for all screens
                            maxHeight: "450px", // Restrict height on larger screens
                            minHeight: "100px", // Minimum height for smaller devices
                          }}
                        >
                          {image.type === "image" ? (
                            <img
                              className="object-cover w-full h-full aspect-[3/4]"
                              src={image.transformedUrl}
                              alt={image.name}
                            />
                          ) : (
                            <video
                              muted
                              controls
                              onPlay={() => {
                                swiperRef.current.autoplay.stop();
                              }}
                              onPause={() => {
                                swiperRef.current.autoplay.start();
                              }}
                              className="w-full h-full object-cover bg-gray-900 rounded-2xl"
                            >
                              <source src={image.transformedUrl} type="video/mp4" />
                            </video>
                          )}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </>
          )
        }
}