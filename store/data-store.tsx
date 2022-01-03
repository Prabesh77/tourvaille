import { createContext, useState, useEffect } from "react"
import { getPlacesData } from "../components/screen/Map/api"

const DataContext = createContext({destinations: null, hotels: null, restaurants: null, bounds: null, setBounds: null, coordinates: null, setCoordinates: null})

export const DataContextProvider = ({ children }) => {
 const [destinations, setDestinations] = useState()
 const [restaurants, setRestaurants] = useState()
 const [hotels, setHotels] = useState()
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
    getPlacesData('attractions', bounds?.sw, bounds?.ne).then((data) => {
      const filtered = data?.filter(d => d.photo)
      setDestinations(filtered)
    })
    getPlacesData('restaurants', bounds?.sw, bounds?.ne).then((data) => {
      const filtered = data?.filter(d => d.photo)
      setRestaurants(filtered)
    })
    getPlacesData('hotels', bounds?.sw, bounds?.ne).then((data) => {
      const filtered = data?.filter(d => d.photo)
      setHotels(filtered)
    })
  }
}, [coordinates, bounds])

  return (
    <DataContext.Provider value={{destinations, bounds, setBounds, coordinates, setCoordinates, restaurants, hotels}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
