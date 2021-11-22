import React, {useEffect} from 'react'
import '../css/pallet.css'
export default function Pallet() {
  const imageUrls = ["https://images.unsplash.com/photo-1501316016915-9b29d4076313?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYxfHxuYXR1cmV8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1574169207511-e21a21c8075a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1465188035480-cf3a60801ea5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1570030990547-f6b13f3062ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1553856622-d1b352e9a211?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1609726121380-243fcdbb1935?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG5hdHVyZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1518462592603-0b6bac106032?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG5hdHVyZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1471201187657-6406da15e43b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE5fHxuYXR1cmV8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1498876617841-44d8b803fec9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU3fHxuYXR1cmV8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1559244673-9cee88d551f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1443926818681-717d074a57af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1543965860-0a2c912bc32f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"]

  function handleDragStart(e){
    this.style.opacity = '0.4';
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', e.srcElement.currentSrc + " p")
    //p identifier to tell drop that this is coming from the pallet
  }
  function handleDragEnd(e) {
    this.style.opacity = '1';
  }

  useEffect(() => {
    let items = document.querySelectorAll('.pallet-img')
    items.forEach(el => {
      el.addEventListener('dragstart', handleDragStart);
      el.addEventListener('dragend', handleDragEnd);
    })
  }, [])
  const palletImgs = imageUrls.map((u, i) => (
    <div className="pallet-img" key={u + i} draggable={true}>
      <img src={u} alt="" />
    </div>
  ))
  return (
    <div className="pallet">
      {palletImgs}
    </div>
  )
}
