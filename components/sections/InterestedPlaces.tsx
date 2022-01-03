import React from 'react'
import SectionHead from '../common/ui/typo/SectionHead'

import styled from 'styled-components'
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
                <SectionHead subHeadContent="Want to have some delicious meals?" paragraphContent="Its not far"/>
                <SlickSlider data={places}/>
            </div>
        </SectionWrapper>
    )
}

export default InterestedPlaces
