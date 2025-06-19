import React from 'react'
import Tour from './Tour';

export default function Tours(props) {
    const { tours,removeTour } = props;
  return (
    
      tours.map((tour) => (
        <Tour key={tour.id} tour={tour} removeTour={removeTour} />
        ))
    
    
  )
}
