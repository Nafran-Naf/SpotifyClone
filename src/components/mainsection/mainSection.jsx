import React from 'react'
import './mainSection.css'
import Trending from '../trending/trending'
import PopularArtists from '../popularArtists/popularArtists'


const mainSection = () => {
  return (
    <main className='mainSection'>  
      <Trending />
      <PopularArtists />
    </main>
  )
}

export default mainSection
