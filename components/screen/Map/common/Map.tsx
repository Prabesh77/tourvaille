
import styled from "styled-components"
import GoogleMapReact from "google-map-react"

const MapHolder = styled.div`
  min-height: calc(100vh - 50px);
  width: 100%;
  @media(max-width: 768px) {
    height: 400px;
  }
`

const MapContent = styled.div`
  height: 50px;
  width: 70px;
  background: #fff;
  padding: 8px;
  border-radius: 4px;
  z-index: 1;
  position: absolute;
  transform: translate(-50%, -50%);
  &:hover {
    background: #eee;
    z-index: 2;
  }

  p {
    font-weight: bold;
  }

  img {
    height: 100%;
    width: 100%;
  }

`

const Map = ({ coordinates, setCoordinates, bounds, setBounds, places, setChildClicked }) => {
  return (
      <>
    <MapHolder style={{ height: "calc(100vh - 50px)", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDCE0RsOcv9pm1E_c1NfBR23CK5YxFPIEE" }}
        defaultCenter={{lat:4.352130,lng:50.845926}}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={(child) => setChildClicked(child)}
       
      >
         {places?.map((place, i) => (
           <MapContent lat={Number(place.latitude)} lng={Number(place.longitude)} key={i}>
             <p>{place?.name}</p>
             <img src={place?.photo?.images?.small?.url} alt="" />
           </MapContent>
          ))}
      </GoogleMapReact>
    </MapHolder>
    </>
  )
}

export default Map
