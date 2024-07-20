import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import hero from '../assets/hero.webp'
import FeaturedProducts from '../components/Home/FeaturedProducts'
const Home = () => {
  return (
    <div className='bg-[#e6e2e2] h-full'>
      <HeroSection images={[hero,hero,hero]}/>
      <FeaturedProducts/>
    </div>
  )
}

export default Home
