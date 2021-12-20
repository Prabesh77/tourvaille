import React from 'react'
import SectionHead from '../common/ui/typo/SectionHead'

import styled from 'styled-components'
import SlickSlider from '../common/slider/Slider'

// Types
import { Raftings } from '../../types'

const SectionWrapper = styled.div`
    background: #fff;
    .contents {
        max-width: 1130px;
        margin: 0 auto;
    }
   
`



const Rafting = ({rafting}:Raftings) => {
    return (
        <SectionWrapper>
            <div className="contents">
                <SectionHead subHeadContent="Best Rafting Experience." paragraphContent="Feel the thrill."/>
                <SlickSlider data={rafting} type="Rafting"/>
            </div>
        </SectionWrapper>
    )
}

export default Rafting
