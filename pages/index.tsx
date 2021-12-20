/* eslint-disable no-undef */
import { useState, useEffect, useContext} from 'react'
import Head from "next/head"
import Image from "next/image"
import Script from 'next/script'
import { getPlacesData } from "../components/screen/Map/api"
import PageHead from "../components/common/other/Head"
import MainBanner from "../components/common/ui/banners/MainBanner"
import MapBanner from "../components/common/ui/banners/MapBanner"
import MainCard from "../components/common/ui/cards/MainCard"
import Button from "../components/common/ui/inputs/Button"
import Checkbox from "../components/common/ui/inputs/Checkbox"
import Radio from "../components/common/ui/inputs/Radio"
import SelectOption from "../components/common/ui/inputs/Select"
import Select from "../components/common/ui/inputs/Select"
import TextArea from "../components/common/ui/inputs/Textarea"
import TextField from "../components/common/ui/inputs/TextField"
import Footer from "../components/common/ui/nav/Footer"
import Navbar from "../components/common/ui/nav/Navbar"
import SectionHead from "../components/common/ui/typo/SectionHead"
import Typo from "../components/common/ui/typo/Typo"
import InterestedPlaces from "../components/sections/InterestedPlaces"
import MostPopular from "../components/sections/MostPopular"
import NearbyPlaces from "../components/sections/NearbyPlaces"
import RandomPlaces from "../components/sections/RandomPlaces"
import Modal from '../components/common/ui/modal/Modal'
import GoogleMapReact from "google-map-react"
import DataContext from '../store/data-store'

// Data
import { placesData } from '../data/index'
import AuthForm from '../components/auth/auth-form'
import { getTrailData } from '../components/screen/Map/api'



export default function Home() {
 const {destinations, coordinates, setCoordinates, setDestinations, bounds, setBounds} = useContext(DataContext)
console.log(destinations, 'destinations')  
 
  
  return (
    <div>
      <PageHead
        title="Home"
        name="Tourvaille."
        content="Make your trip best memory with us."
      />
      <MainBanner />
      <NearbyPlaces places={destinations}/>
      <MostPopular places={placesData}/>
      <MapBanner />
      <InterestedPlaces places={placesData}/>
      <RandomPlaces places={placesData}/>
      <Footer />
      <div style={{height: '200px',width:'300px'}}>
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
        // onChildClick={(child) => setChildClicked(child)}
       
      >
         {/* {places?.map((place, i) => (
           <MapContent lat={Number(place.latitude)} lng={Number(place.longitude)} key={i}>
             <p>{place?.name}</p>
             <img src={place?.photo?.images?.small?.url} alt="" />
           </MapContent>
          ))} */}
      </GoogleMapReact>
      </div>
    </div>
  )
}
