import React from "react"
import Navbar from "../components/common/ui/nav/Navbar"
import Rafting from "../components/sections/Raftings"
import Trekking from "../components/sections/Trekkings"

import { TrekkingData } from "../data/TrekkingData"
import { RaftingData } from "../data/RaftingData"


const explore = ({trekking, rafting}) => {
  // console.log(trekking)
  return (
    <div>
     <Trekking trekking={trekking}/>
     <Rafting rafting={rafting}/>
    </div>
  )
}

export async function getStaticProps() {
  const resTrekking = await fetch('http://localhost:3000/api/travel/trekking')
  const resRafting = await fetch('http://localhost:3000/api/travel/rafting')
  const trekData = await resTrekking.json()
  const raftData = await resRafting.json()
  return {
    props: {
      trekking: trekData,
      rafting: raftData
    }
  }
}

export default explore
