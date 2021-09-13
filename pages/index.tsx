import Head from "next/head"
import Image from "next/image"
import PageHead from "../components/common/other/Head"
import MainBanner from "../components/common/ui/banners/MainBanner"
import MainCard from "../components/common/ui/cards/MainCard"
import Button from "../components/common/ui/inputs/Button"
import Checkbox from "../components/common/ui/inputs/Checkbox"
import Radio from "../components/common/ui/inputs/Radio"
import SelectOption from "../components/common/ui/inputs/Select"
import Select from "../components/common/ui/inputs/Select"
import TextArea from "../components/common/ui/inputs/Textarea"
import TextField from "../components/common/ui/inputs/TextField"
import Navbar from "../components/common/ui/nav/Navbar"
import Typo from "../components/common/ui/typo/Typo"

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
      <Navbar />
      <MainBanner />
      <h1>All components</h1>
      <div>
        <Button size="small" text="Submit" type="primary" onClick={""} />
        <Button size="medium" text="Submit" type="secondary" onClick={""} />
        <Button size="large" text="Cancel" type="outlined" onClick={""} />

        <Checkbox label="Label for One" value={1} onChange={handleChange} />
        <Checkbox label="Label for Two" value={2} onChange={handleChange} />
        <Checkbox label="Label for Three" value={3} onChange={handleChange} />

        <Radio label="Label for One" value={1} onChange={handleChange} />
        <Radio label="Label for Two" value={2} onChange={handleChange} />

        {/* <SelectOption /> */}
        <TextField label="Full Name" onChange={handleInputChange} />
        <TextArea label="Message" onChange={handleInputChange} />

        <Typo type="heading" color="dark" content="Header" />
        <Typo type="heading" color="light" content="Header" />
        <Typo type="subHeading" color="dark" content="Sub heading" />
        <Typo type="subHeading" color="light" content="Sub heading" />
        <Typo type="" color="dark" content="Sub heading regular" />
        <Typo type="" color="light" content="Sub heading" />
        <Typo type="paragraph" color="dark" content="Paragraph" />
        <Typo type="paragraph" color="light" content="Paragraph" />

        {place.map((p) => (
          <MainCard place={p} />
        ))}
      </div>
    </div>
  )
}
