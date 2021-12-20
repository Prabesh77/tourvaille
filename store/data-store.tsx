import { createContext, useState, useEffect } from "react"
import { getPlacesData } from "../components/screen/Map/api"

const DataContext = createContext({destinations: null, setDestinations: null, bounds: null, setBounds: null, coordinates: null, setCoordinates: null})

export const DataContextProvider = ({ children }) => {
 const [destinations, setDestinations] = useState()
 const [bounds, setBounds] = useState({sw: null, ne: null})
 const [coordinates, setCoordinates] = useState({})
//   const notificationCtx = useContext()

useEffect(() => {
  navigator.geolocation.getCurrentPosition(
    ({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    }
  )
}, [])

useEffect(() => {
  if (bounds?.sw && bounds?.ne) {
    // setLoading(true)
    getPlacesData('attractions', bounds?.sw, bounds?.ne).then((data) => {
      const filtered = data?.filter(d => d.photo)
      setDestinations(filtered)
      // setFilteredPlaces([])
      // setLoading(false)
    })
  }
}, [coordinates, bounds])

  return (
    <DataContext.Provider value={{destinations, setDestinations, bounds, setBounds, coordinates, setCoordinates}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
