import React from 'react'
import SectionHead from '../common/ui/typo/SectionHead'

import styled from 'styled-components'
import SlickSlider from '../common/slider/Slider'

// Types
import { Places } from '../../types'

const SectionWrapper = styled.div`
    background: var(--col-white);
    .contents {
        max-width: 1130px;
        margin: 0 auto;
    }
   
`



const MostPopular = ({places}:Places) => {
    return (
        <SectionWrapper>
            <div className="contents">
                <SectionHead subHeadContent="Best Hotels around you" paragraphContent="Where most people are liking."/>
                <SlickSlider data={places}/>
            </div>
        </SectionWrapper>
    )
}

export default MostPopular
