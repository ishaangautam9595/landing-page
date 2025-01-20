import React, { useEffect } from 'react'
import './App.css'
import Lenis from 'lenis';
// imports
import NavigationBar from './components/Navigation/NavigationBar';
import IcebergSection from './components/Iceberg/IcebergSection'
import { LandingPage } from './components/Hero/LandingPage';
import { TeacherFeatures } from './components/Challenge/TeacherFeatures';
import  HowItWorks from './components/HowWorks/HowItWorks';
import ClassroomFeatures from './components/Feature/ClassroomFeatures';
import TestimonialSection from './components/Testimony/TestimonialData';
import BuilderSection from './components/Builder/BuilderSection';
import PlatformFeatures from './components/Privacy/PlatformFeatures';
import FooterLayout from './components/Footer/FooterLayout';

function App() {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  })


  return (
    <>
     <NavigationBar />
     <LandingPage />
      <IcebergSection />
      <TeacherFeatures />
      <HowItWorks />
      <ClassroomFeatures />
      <TestimonialSection />
      <BuilderSection />
      <PlatformFeatures />
      <FooterLayout />
    </>
  )
}

export default App
