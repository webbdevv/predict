import React from 'react'
import '../css/modal.css'
import '../css/overlay.css'
export default function Info(props) {
  if(!props.open) return null
  return (
    <> 
    <div className="overlay" onClick={props.setClose}></div>
    <div className="info-modal">
      <h2 className="info-header">Welcome To Predict Pic</h2>
      <p>Here are some basic instructions for using the application</p>
      <p>Drag images from the right panel into the left to place them in your gallery</p>
      <p>Clicking images in your gallery will split them horizontally, holding alt and clicking them will split them vertically</p>
      <p>To swap the positions of two images in your gallery, drag one image onto another</p>
      <p>Clicking save will save a layout which can then be loaded by selecting the name of the layout with the dropdown and clicking load</p>
      <p>The add button will add another placeholder image to the gallery</p>
      <button onClick={props.setClose} className="close-info">Close</button>
    </div>
    </>
  )
}
