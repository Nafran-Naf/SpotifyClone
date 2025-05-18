import React, { useState } from 'react'
import './mainSection.css'
import Trending from '../trending/trending'
import PopularArtists from '../popularArtists/popularArtists'
import SpecificMusicFile from '../../pages/specificMusicPage/specificMusicFile'




const MainSection = () => {
  const [currentPage,setCurrentPage]=useState("home");
  const [currentElement,setCurrentElement]=useState(null);
  return (
    <main className='mainSection'> 
    {console.log(currentPage,currentElement)}
    {
      currentPage ==="home"?
      <>
      <Trending setCurrentElement={setCurrentElement}  setCurrentPage={setCurrentPage} />
      <PopularArtists setCurrentPage={setCurrentPage} />
      </>:
      currentPage==="musicSpecificPage" ? <>
        <SpecificMusicFile currentElement={currentElement} />
      </>:currentPage==="artistSpecificPage"?<>artist</>:null
    } 
    
      
    </main>
  )
}

export default MainSection;
