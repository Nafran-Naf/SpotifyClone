import React from 'react'
import './sidebar.css'
import Card from './Card'
const sidebar = () => {
  const text = ["Legal", "Security and Privacy Center", "Privacy Policy", "Cookies", "About Ads", "Accessibility"]
  return (
    <div className='sidebarMainContainer'>
      <div className="sideBarTopSection">
        <h1>Your Library</h1>
        <p>+</p>
      </div>
      <div className="sideBarMiddleSection">
        <Card heading="Create your first playlist" subheading="It's easy, we'll help you" buttontext="Create playlist" />
        <Card heading="Let's find some podcasts to follow" subheading="We'll keep you updated on new episodes" buttontext="Browse podcasts" />
      </div>
      <div className="sideBarBottomSection">
        <div className="sideBarBottomSectionTopContainer">
          {
            text.map((ele) => {
              return (
                <p>{ele}</p>
              )
            })
          }
        </div>
        <div className="sideBarBottomSectionBottomContainer">
          <p>Cookies</p>        
          </div>
        <div className="sideBarBottomSectionBottomContainer">
          <button>English </button>
        </div>
      </div>
    </div>
  )
}

export default sidebar
