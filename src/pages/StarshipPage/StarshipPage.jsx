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
            <h2>{shipDetails.name}</h2>
            <h2>{shipDetails.model}</h2>
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