import React, { useState } from 'react'

function Tour(props) {
  const { tour,removeTour } = props;
    const[expand,setExpand]=useState(false)
  return (
    <div key={tour.id} className="tour">
            <img src={tour.image} alt={tour.name} />
            <h2>{tour.name}</h2>
            <span>${tour.price}</span>
            <p id={`tour-item-para-${tour.id}`}>{expand?tour.info:tour.info.substr(0,200)}</p>
            <button id={`see-more-${tour.id}`} onClick={()=>setExpand(!expand)}>{expand ? 'Show Less' : 'Read More'}</button>
            <button id={`delete-btn-${tour.id}`} onClick={()=>removeTour(tour.id)}>Remove</button>
    </div>
  )
}

export default Tour
