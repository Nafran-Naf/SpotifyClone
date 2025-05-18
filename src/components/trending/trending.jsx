import React from 'react'
import './trending.css'
import TrendingCard from '../trendingCard/trendingCard'
const trending = ({setCurrentPage,setCurrentElement}) => {
  return (
    <div className='trendingSectionMainContainer'>
      <span>
        Trending Songs
      </span>
     
      <TrendingCard setCurrentPage={setCurrentPage} setCurrentElement={setCurrentElement} />
    </div>
  )
}

export default trending
