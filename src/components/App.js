import React,{useEffect,useState} from "react";
import Tours from "./Tours";
import tourData from "./TourItems.json";
import Loading from "./Loading";


const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {

    setTours(tourData);
    setLoading(false);
  }, []);  
  
  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
    
  }
  function refresh(){
    setLoading(true);
    setTours(tourData);
    setLoading(false);
  }
  function fetchTours() {
    return tours.length > 0 ? <Tours tours={tours} removeTour={removeTour}/> :<div>
      <h2>No Tours Left</h2>
      <button onClick={() => refresh()}>Refresh</button>
    </div>;
  }
  return(
      <main id="main">
        
        {loading ? <Loading /> : fetchTours()}
        
        
      </main>
  )
}
export default App;
/*
{tours.length > 0 && tours.map((tour) => (
          <div key={tour.id} className="tour">
            <img src={tour.image} alt={tour.name} />
            <h2>{tour.name}</h2>
            <span>${tour.price}</span>
            <p>{tour.info}</p>
            
          </div>
        ))}
          */