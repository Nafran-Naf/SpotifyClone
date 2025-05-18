import React from 'react'
import './trendingCard.css'
import { TrendingCardData } from '../../config/config'

const trendingCard = ({setCurrentPage,setCurrentElement}) => {
  
  return (
    <>
    <div className="trendingCardMainContainer">
    {
      TrendingCardData.map((ele,id)=>{
        return(
          <>
          <div key={id} onClick={()=> {
            setCurrentPage("musicSpecificPage")
            setCurrentElement(ele)
          }}className="cardContainer">
            <img src={ele.imgSrc} alt="" />
            <div className="cardTextContainer">
              <h2>{ele.heading}</h2>
              <p>{ele.subHeading}</p>
            </div>
          </div>
          </>

        )
      })
    }
    </div>
    </>
  )
}

export default trendingCard
