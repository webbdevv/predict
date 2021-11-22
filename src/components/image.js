import React from 'react'

export default function Image(props) {
  function split(e){
    //function for splitting images
    //grab container id and section id to update the state
    let id = e.target.getAttribute('containerid')
    let sectionid = e.target.getAttribute('sectionid')
    let newState = [...props.container] // ex. ['p', '300', '300']
    let [src, height, width, top, left] = newState[sectionid].split(" ")
    let newImage
    if(e.altKey){ //hold alt key for vertical split
      let newWidth = Number(width) / 2
      width = newWidth
      newState[sectionid] = `${src} ${height} ${width} ${top} ${left}`
      newImage = `p ${height} ${width} ${top} ${Number(left) + Number(width)}`
    } else { //regular clip is horizontal split
      let newHeight = Number(height) / 2
      height = newHeight
      newState[sectionid] = `${src} ${height} ${width} ${top} ${left}`
      newImage = `p ${height} ${width} ${Number(top) + Number(height)} ${left}`
    }
    newState.push(newImage)
    props.updateCards(id, newState)
  }
  const imageEls = props.ctx.map((el, idx) => {
    let [src, height, width, top, left] = el.split(" ")
    let style = {
      position: 'absolute',
      height: height + 'px',
      width: width + 'px',
      left: left + 'px',
      top: top + 'px'
    }
    return <img onClick={(e) => split(e)} style={style} onDrop={props.onDrop} onDragLeave={props.onDragLeave} onDragOver={props.onDragOver} onDragStart={props.onDragStart} onDragEnd={props.onDragEnd} draggable={true} className="layout-card drop" 
    containerid={props.id} sectionid={idx} src={src !== 'p' ? src : "https://via.placeholder.com/300"}/>
  })
  return (
    <div className="card-container">
      {imageEls}
    </div>
  )
}
