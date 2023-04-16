import React from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import SimilarArtist from './components/SimilarArtist'
import Interested from './components/Interested'
import Tags from './components/Tags'
import Footer from './components/Footer'

const Home = () => {
  return (
   <>
    <Header  />
    <div className=' md:max-w-[720px] lg:max-w-[1140px] m-auto overflow-x-hidden ' >

    <Profile />
    
    
    <SimilarArtist />
    <Interested />
    <Tags />

    </div>
    <Footer />
   </>
  )
}

export default Home
