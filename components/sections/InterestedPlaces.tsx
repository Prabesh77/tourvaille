import React from 'react'
import SectionHead from '../common/ui/typo/SectionHead'

import styled from 'styled-components'
import CardSlider from '../common/ui/cards/CardSlider'
import SlickSlider from '../common/slider/Slider'

// Types
import { Places } from '../../types'

const SectionWrapper = styled.div`
    .contents {
        max-width: 1130px;
        margin: 0 auto;
    }
   
`
const InterestedPlaces = ({places}) => {
    return (
        <SectionWrapper>
            <div className="contents">
                <SectionHead subHeadContent="You might be interested in these." paragraphContent="Places in Kathmandu."/>
                <SlickSlider data={places}/>
            </div>
        </SectionWrapper>
    )
}

export default InterestedPlaces
