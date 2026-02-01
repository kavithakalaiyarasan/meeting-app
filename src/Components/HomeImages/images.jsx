import React, { useState } from 'react'
import './images.css'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/img3.jpg'
import img1 from '../../assets/image1.png'

function Images() {
    const images=[img1,img2,img3]
    const [index,setIndex]=useState(0)

    const prevImage=()=>{
      setIndex((prev)=>(prev===0 ? images.length -1 : prev -1))
    }
    const nextImage=()=>{
      setIndex((prev)=>(prev === images.length -1 ? 0 : prev+1))
    }
  return (
    <div className='image-sec'>
      <div className="images">
      <img 
      key={index}
      src={images[index]} 
      alt="banner" 
      className='slide-image' />
      
       <button className="arrow left" onClick={prevImage}>
          &#10094;
        </button>
        <button className="arrow right" onClick={nextImage}>
          &#10095;
        </button>
      
      </div>
      
    </div>
  )
}

export default Images