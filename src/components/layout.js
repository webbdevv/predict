import React, {useState} from 'react'
import '../css/layout.css'
import SaveModal from './save_modal'
import Image from './image'
export default function Layout() {
  const base = {
    0: ["p 300 300 0 0"],
    1: ["p 300 300 0 0"],
    2: ["p 300 300 0 0"],
    3: ["p 300 300 0 0"]
  }
  const [cards, setCards] = useState(Object.assign({}, base))
  const [count, setCount] = useState(4) //keep track of cards
  const [layouts, setLayouts] = useState({}) //collect saved layouts
  const [open, setOpen] = useState(false) //modal
  const [selected, setSelected] = useState('') //selecting a layout to load

  function handleDrop(e){
    e.target.classList.remove('over')
    let id = e.target.getAttribute('containerid')
    let sectionId = e.target.getAttribute('sectionid')
    let [data, type] = e.dataTransfer.getData('text/plain').split(" ")
    if(type === "p"){
      //handle add from pallet
      const newState = Object.assign({}, cards)
      let imageData = newState[id][sectionId].split(" ")
      imageData[0] = data //add dragged image data into state
      newState[id][sectionId] = imageData.join(" ")
      setCards(newState)
    } else if (type === "l"){
      let newState = Object.assign({}, cards)
      let otherId = data
      let temp = newState[id]
      // swap pictures
      newState[id] = newState[otherId]
      newState[otherId] = temp
      setCards(newState)
    }
  }

  function handleDragEnter(e){
    e.preventDefault();
    e.target.classList.add('over')
  }
  function handleDragLeave(e){
    e.target.classList.remove('over')
  }

  function handleDragStart(e){
    e.target.style.opacity = '0.4'
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', e.target.getAttribute('containerid') + " l")
  }
  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  function addCard(){
    let newState = Object.assign({}, cards)
    newState[count] = ["p 300 300 0 0"]
    setCount(count + 1)
    setCards(newState)
  }

  function saveLayout(name){
    let newLayout = {[name]: JSON.parse(JSON.stringify(cards))}
    let newState = Object.assign({}, {...newLayout, ...layouts})
    setLayouts(newState)
    setOpen(false)
    setSelected(name)
  }

  function loadLayout(){
    if(selected === "") return;
    setCards(layouts[selected])
  }

  function updateCards(idx, newContainer){ 
    let newState = Object.assign({}, JSON.parse(JSON.stringify(cards)))
    newState[idx] = newContainer
    setCards(newState)
  }
  const cardElements = Object.entries(cards).map(([k, v], i) => (  
      <Image container={cards[i]} updateCards={updateCards} id={i} ctx={v}  onDrop={handleDrop} onDragLeave={handleDragLeave} onDragOver={handleDragEnter} onDragStart={handleDragStart} onDragEnd={handleDragEnd}/>
  ))
  const optionElements = Object.entries(layouts).map(([k, v], i) => (
    <option value={k}>{k}</option>
  ))
  return (
    <>
      <SaveModal save={saveLayout} open={open} close={() => setOpen(false)} />
      <div className="layout">
        <div className="layout-heading">
          Your Gallery 
          <span className="add-card" onClick={addCard}>+</span>
          <label className="load" onClick={loadLayout} htmlFor="load">Load</label>
          <select defaultValue="" onChange={(e) => setSelected(e.target.value)} name="load" id="load">
            {optionElements}
          </select>
          <span className="save" onClick={() => setOpen(true)}>Save</span>
        </div>
        {cardElements}
      </div>
    </>
  )
}
