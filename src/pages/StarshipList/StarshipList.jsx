import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllStarships } from "../../services/sw-api";

const StarshipList = () => {
  const [starships, setStarships] = useState([])
  useEffect(() => {
    const fetchSharshipData = async () => {
      const starships = await getAllStarships()
      setStarships(starships.results)
    }
    fetchSharshipData()
  }, [])
  return (
    <main className="container">
      <div className="ship-details">
        {starships.map(starship =>
          <Link to='/starship' state={{ starship }} key={starship.name} className='ship'>
            {starship.name}
          </Link>
        )}
      </div>
    </main>
  )
}

export default StarshipList;