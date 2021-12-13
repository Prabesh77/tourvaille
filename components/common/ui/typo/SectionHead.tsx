
import styled from 'styled-components'
import Typo from './Typo'

const HeadWrapper = styled.div`
    margin: 4rem 0 3rem 0;
    padding-top: 1rem;

`

const SectionHead = ({subHeadContent, paragraphContent}) => {
    return (
        <HeadWrapper>
            <Typo type="subHeading" color="dark"> {subHeadContent}</Typo>
            <Typo type="paragraph" color="dark"> {paragraphContent}</Typo>
        </HeadWrapper>
    )
}

export default SectionHead
