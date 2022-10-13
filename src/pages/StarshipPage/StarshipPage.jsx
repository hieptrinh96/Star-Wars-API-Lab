import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getDetails } from '../../services/sw-api'
import { Link } from 'react-router-dom'

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
      <div className='container'>
        {shipDetails.name ?
          <>
            <div className='detail'>
              <p><strong>Ship Name:</strong>{shipDetails.name}</p>
              <p><strong>Ship Model:</strong>{shipDetails.model}</p>
              <div className='home-button'>
                <Link to='/'>Home</Link>
              </div>
            </div>
          </>
          :
          <>
            <div className='loading'>
              <p>Loading Class Details...</p>
            </div>
          </>
        }
      </div>
    </>
  );
}

export default StarShipPage;