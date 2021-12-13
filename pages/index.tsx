/* eslint-disable no-undef */
import { useState} from 'react'
import Head from "next/head"
import Image from "next/image"
import Script from 'next/script'
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

// Data
import { placesData } from '../data/index'
import AuthForm from '../components/auth/auth-form'



export default function Home() {
 
  const handleChange = (e) => {
    console.log(e.target.value)
  }
  const handleInputChange = (v) => {
    console.log(v)
  }
  const place = [
    {
      id: 1,
      name: "Bhaktapur Durbar Square",
      location: "Bhaktapur",
      price: 1200,
      image:
        "https://images.pexels.com/photos/4028816/pexels-photo-4028816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 2,
      name: "Patan Durbar Square",
      location: "Patan",
      price: 1100,
      image:
        "https://images.pexels.com/photos/4028822/pexels-photo-4028822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 3,
      name: "Basantpur Durbar Square",
      location: "Basantpur",
      price: 900,
      image:
        "https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ]
  return (
    <div>
      <PageHead
        title="Home"
        name="Tourvaille."
        content="Make your trip best memory with us."
      />
      <MainBanner />
      <NearbyPlaces places={placesData}/>
      <MostPopular places={placesData}/>
      <MapBanner />
      <InterestedPlaces places={placesData}/>
      <RandomPlaces places={placesData}/>
      <Footer />
      <h1>All components</h1>
      {/* <button onClick={() => setShowModal(true)}>Open Modal</button>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        >
          <AuthForm />
        </Modal> */}
      <div>
        <Button size="small" text="Submit" type="primary"  />
        <Button size="medium" text="Submit" type="secondary" />
        <Button size="large" text="Cancel" type="outlined"  />

        <Checkbox label="Label for One" value={1} onChange={handleChange} />
        <Checkbox label="Label for Two" value={2} onChange={handleChange} />
        <Checkbox label="Label for Three" value={3} onChange={handleChange} />

        <Radio label="Label for One" value={1} onChange={handleChange} />
        <Radio label="Label for Two" value={2} onChange={handleChange} />

        {/* <SelectOption /> */}
        <TextField label="Full Name" onChange={handleInputChange} />
        <TextArea label="Message" onChange={handleInputChange} />

        {/* <Typo type="heading" color="dark" content="Header" />
        <Typo type="heading" color="light" content="Header" />
        <Typo type="subHeading" color="dark" content="Sub heading" />
        <Typo type="subHeading" color="light" content="Sub heading" />
        <Typo type="" color="dark" content="Sub heading regular" />
        <Typo type="" color="light" content="Sub heading" />
        <Typo type="paragraph" color="dark" content="Paragraph" />
        <Typo type="paragraph" color="light" content="Paragraph" /> */}


        {place.map((p) => (
          <MainCard key={p.id} place={p} />
        ))}
      </div>
    </div>
  )
}
