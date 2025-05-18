import React from 'react'

const SpecificMusicFile = ({currentElement}) => {
  return (
    <div>
      <img src={currentElement.imgSrc} alt="" />
      <h1>{currentElement.heading}</h1>
      <h1>{currentElement.subHeading}</h1>
      <audio src={currentElement.musicFile}   controls></audio>
    </div>
  )
}

export default SpecificMusicFile;
