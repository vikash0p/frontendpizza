import React from 'react'
import { Metadata } from "next";
import { aboutMetaData } from "@/utils/meta/aboutMetaData";
import AboutComponent from '@/components/AboutComponents/AboutComponent'

export const metadata: Metadata = aboutMetaData;

const About = () => {
  return (
    <div>
      <AboutComponent />
    </div>
  )
}

export default About
