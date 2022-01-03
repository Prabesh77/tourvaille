/* eslint-disable no-undef */
import { useContext } from "react"
import PageHead from "../components/common/other/Head"
import MainBanner from "../components/common/ui/banners/MainBanner"
import MapBanner from "../components/common/ui/banners/MapBanner"
import InterestedPlaces from "../components/sections/InterestedPlaces"
import MostPopular from "../components/sections/MostPopular"
import NearbyPlaces from "../components/sections/NearbyPlaces"
import GoogleMapReact from "google-map-react"
import DataContext from "../store/data-store"


export default function Home() {
  const {
    destinations,
    restaurants,
    hotels,
    coordinates,
    setCoordinates,
    bounds,
    setBounds,
  } = useContext(DataContext)

  console.log(restaurants)
  return (
    <div>
      <PageHead
        title="Home"
        name="Tourvaille."
        content="Make your trip best memory with us."
      />
      <MainBanner />
      <NearbyPlaces places={destinations} />
      <MostPopular places={hotels} />
      <MapBanner />
      <InterestedPlaces places={restaurants} />
      {/* <RandomPlaces places={placesData}/> */}
      <div style={{ height: "200px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDCE0RsOcv9pm1E_c1NfBR23CK5YxFPIEE" }}
          defaultCenter={{ lat: 4.35213, lng: 50.845926 }}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={(e) => {
            setCoordinates({ lat: e.center.lat, lng: e.center.lng })
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
          }}
        >
          {/* @ts-ignore */}
           {/* <FaMapMarkerAlt lat={+coordinates?.latitude}
                lng={+coordinates?.longitude}
                key={2}
                className="marker-icon"
                style={{fontSize: '50px', color: 'var(--col-brand)'}}
              /> */}
        </GoogleMapReact>
      </div>
    </div>
  )
}
