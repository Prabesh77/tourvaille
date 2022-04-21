import { useEffect, useState, useContext } from "react"
import styled from "styled-components"
import { useRouter } from "next/router"

import { getPlacesData } from "./api"
import List from "./common/List"
import Map from "./common/Map"
import Header from "./common/MapHeader"
import DataContext from "../../../store/data-store"

const Layout = styled.div`
  .layout {
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
    .left {
      width: 400px;
      height: 100%;
      @media (max-width: 768px) {
        height: 60%;
        width: 100%;
        background: red;
      }
    }

    .right {
      width: 100%;
      height: 100%;
      @media (max-width: 768px) {
        max-height: 40%;
        width: 100%;
      }
    }
  }
`

interface Prop {
  currentType?: any
}

function MapSearch({ currentType }: Prop) {
  const [places, setPlaces] = useState<any>()
  const [filteredPlaces, setFilteredPlaces] = useState<any>()
  const { coordinates, setCoordinates, bounds, setBounds } =
    useContext(DataContext)

  // const [coordinates, setCoordinates] = useState({})
  // const [bounds, setBounds] = useState<any>({})
  console.log(coordinates, bounds)

  const [type, setType] = useState(currentType)
  const [rating, setRating] = useState("")

  const [childClicked, setChildClicked] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude })
      }
    )
    setType(currentType)
  }, [])
  useEffect(() => {
    if (bounds?.sw && bounds?.ne) {
      setLoading(true)
      getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => {
        setPlaces(data)
        setFilteredPlaces([])
        setLoading(false)
      })
    }
  }, [bounds, type])

  useEffect(() => {
    const filtered = places?.filter((place) => place.rating > rating)
    setFilteredPlaces(filtered)
  }, [rating])
  return (
    <>
      <Layout className="App">
        {/* <Header setShowModal={null} setCoordinates={setCoordinates} /> */}
        <div className="layout">
          <div className="left">
            <List
              places={filteredPlaces?.length ? filteredPlaces : places}
              childClicked={childClicked}
              isLoading={loading}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
            />
          </div>
          <div className="right">
            <Map
              coordinates={coordinates}
              setCoordinates={setCoordinates}
              bounds={bounds}
              setBounds={setBounds}
              places={filteredPlaces?.length ? filteredPlaces : places}
              setChildClicked={setChildClicked}
            />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default MapSearch
