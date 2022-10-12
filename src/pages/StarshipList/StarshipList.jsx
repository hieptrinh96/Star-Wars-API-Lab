import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllStartships } from "../../services/sw-api";
const StarshipList = () => {
  const [starships, setStarships] = useState([])
  useEffect(() => {
    const fetchSharshipData = async () => {
      const starships = await getAllStartships()
      setStarships(starships.results)
    }
    fetchSharshipData()
  }, [])
  return (
    <>
      {starships.map(starship =>
        <Link to='/starship' state={{ starship }} key={starship.name}>
          {starship.name}
        </Link>
      )};
    </>
  )
}

export default StarshipList;