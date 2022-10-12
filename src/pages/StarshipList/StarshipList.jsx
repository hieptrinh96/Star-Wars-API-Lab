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
    <>
      {starships.map(starship =>
        <Link to='/starships' state={{ starship }} key={starship.name}>
          {starship.name}
        </Link>
      )};
    </>
  )
}

export default StarshipList;