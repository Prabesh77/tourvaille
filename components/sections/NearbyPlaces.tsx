import React from 'react'
import SectionHead from '../common/ui/typo/SectionHead'

import styled from 'styled-components'
import CardSlider from '../common/ui/cards/CardSlider'
import Opt from '../common/ui/cards/Opt'
import SlickSlider from '../common/slider/Slider'

// Types
import { Places } from '../../types/index'

const SectionWrapper = styled.div`
    height: 400px;
    .contents {
        max-width: 1130px;
        margin: 0 auto;
    }
   
`
const NearbyPlaces = ({places}:Places) => {
    return (
        <SectionWrapper>
            <div className="contents">
                <SectionHead subHeadContent="Places near you" paragraphContent="Just around you"/>
                <SlickSlider data={places}/>
            </div>
        </SectionWrapper>
    )
}

export default NearbyPlaces
