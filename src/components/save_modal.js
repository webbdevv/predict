import React, {useState} from 'react'
import '../css/modal.css'
import '../css/overlay.css'
export default function SaveModal(props) {
  const [name, setName] = useState('')
  if(!props.open) return null;
  return (
    <>
      <div className="overlay" onClick={props.close}/>
      <div className='save-modal'>
        <div className="form-field">
          Name Your Gallery
            <input type="text" onChange={(e) => setName(e.target.value)}/>
        </div>
        <button onClick={() => props.save(name)}>Save this Layout</button>
      </div>
    </>
  )
}
