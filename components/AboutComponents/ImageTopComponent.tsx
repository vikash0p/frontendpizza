'use client'
import Image from 'next/image';
import React from 'react'

const ImageTopComponent = ({img,title,des}:{img:string,title:string,des:string}) => {
  return (
    <div className="relative w-full h-80 bg-gray-200 flex items-center justify-center">
      <Image
        fill
        src={img}
        alt={title}
        className="object-cover w-full h-full"
        sizes="(min-width: 1540px) 1488px, (min-width: 1280px) 1232px, (min-width: 1040px) 976px, (min-width: 780px) 720px, (min-width: 680px) 592px, calc(94.44vw - 31px)"
        priority
      />{" "}
      {/* Replace with actual background image */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl font-bold"> {title}</h1>
        <p className="text-white mt-2">{des}</p>
      </div>
    </div>
  );
}

export default ImageTopComponent
