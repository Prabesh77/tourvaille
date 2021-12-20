import React from 'react'
import Navbar from '../../components/common/ui/nav/Navbar'
import AdventureDetails from '../../components/common/ui/cards/AdventureDetails'
import { useRouter } from 'next/router'
import { TrekkingData } from '../../data/TrekkingData'
import { RaftingData } from '../../data/RaftingData'
import Details from '../../components/common/ui/cards/Details'

const Detail = ({trekking, rafting}) => {
    const router = useRouter()
    const {type, slug} = router.query
    const dataToPass = () => {
        if(type==='Trekking') {
            return trekking?.find(trek => trek.name === slug)
           
        }
        if(type === 'Rafting') {
            return rafting?.find(trek => trek.name === slug)
        }
        return
    }
    const details = dataToPass()
    console.log(details)
    const detailToRender = () => {
        if(type === 'Trekking' || type === 'Rafting') {
            return <AdventureDetails details={details} type={type}/>
        }
        return <Details />
    }
    return (
        <div>
          {detailToRender()}
        </div>
    )
}

export async function getServerSideProps() {
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

export default Detail
