"use client"
import React, { useEffect, useState,useRef } from "react";
import Image from "next/image";
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
                <div className="bg-gray-900 w-full flex justify-center  py-2 items-center">
                  <Swiper
                    initialSlide={1}
                    onBeforeInit={(swiper) => {
                      swiperRef.current = swiper;
                      
                    }}
                    draggable={false}
                    effect="coverflow"
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 150,
                      scale: 0.6,
                      modifier: 1,
                      slideShadows: false,
                    }}
                    zoom={true}
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                    slidesPerView={1.5} // Always maintain 3 slides per view
                    navigation={true}
                    centeredSlides
                    /* autoplay={{
                      delay: 2500,
                      stopOnLastSlide: false,
                      disableOnInteraction: false,
                    }} */
                    loop
                    breakpoints={{
                      250: {
                        slidesPerView: 1.2,
                        spaceBetween: 20,
                      },
                      640: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 1.5,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 2.5,
                        spaceBetween: 50,
                      },
                    }}
                    spaceBetween={0}
                    className="w-full"
                    modules={[Zoom, Navigation, EffectCoverflow]}
                  >
                    {images?.map((image, index) => (
                      <SwiperSlide
                        key={index}
                        className="flex justify-center items-center "
                      >
                        <div
                          className="flex items-center justify-center rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
                          style={{
                             // Base height for all screens
                             maxHeight:500
                          }}
                        >
                          {image.type === "image" ? (
                            <Image
                            src={image.transformedUrl}
                            alt={`Image ${index + 1}`}
                            loading="lazy"
                            width={1000}
                            height={750}
                          />
                          ) : (
                            <video
                              muted={false}
                              controls
                              style={{
                                maxHeight:500
                              }}
                             /*  onPlay={() => {
                                swiperRef.current.autoplay.stop();
                              }}
                              onPause={() => {
                                swiperRef.current.autoplay.start();
                              }} */
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