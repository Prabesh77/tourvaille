import React from 'react'
import SectionHead from '../common/ui/typo/SectionHead'

import styled from 'styled-components'
import SlickSlider from '../common/slider/Slider'

// Types
import { Places, Trekkings } from '../../types'

const SectionWrapper = styled.div`
    background: #fff;
    .contents {
        max-width: 1130px;
        margin: 0 auto;
    }
   
`



const Trekking = ({trekking}:Trekkings) => {
    return (
        <SectionWrapper>
            <div className="contents">
                <SectionHead subHeadContent="Best Trekking Routes." paragraphContent="Where most people are trekking."/>
                <SlickSlider data={trekking} type="Trekking"/>
            </div>
        </SectionWrapper>
    )
}

export default Trekking
