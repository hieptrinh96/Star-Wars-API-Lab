import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getDetails } from '../../services/sw-api'

const StarShipPage = () => {
  const [shipDetails, setShipDetails] = useState({})
  const location = useLocation()
  useEffect(() => {
    const fetchShipDetails = async () => {
      const shipDetails = await getDetails(location.state.starship.url)
      setShipDetails(shipDetails)
    }
    fetchShipDetails()
  }, [location.state.starship.url])
  return (
    <>
      <div>
        {shipDetails.name ?
          <>
            {/* Gotta have the random cat pics... */}
            <img src="http://theoldreader.com/kittens/320/240/" alt="" />
            <h2>{shipDetails.name}</h2>
            <div>Hit die: d{shipDetails.hit_die}</div>
            <h3>Proficiencies:</h3>
            {shipDetails.proficiencies.map((proficiency) => (
              <div key={proficiency.index}>{proficiency.name}</div>
            ))}
          </>
          :
          <>
            <p>Loading Class Details...</p>
          </>
        }
      </div>
    </>
  );
}

export default StarShipPage;