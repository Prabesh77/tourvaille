
import styled from 'styled-components'

const Head = styled.h2`
    font-size: 40px;
    font-size:${props => props.type === 'heading'? '40px':  props.type === 'subHeading'? '24px':  props.type === 'paragraph'? '14px': '16px' } ;
    font-weight:${props => props.type === 'paragraph'? '500': props.type === ""? '500': '600' } ;
    color:${props => props.color === 'dark'? 'var(--col-black)': 'var(--col-white)' } ;
`

const Typo = ({content, color,  type, ...props}) => {
    console.log(type)
    return (
        <Head className={type} color={color} type={type} {...props}>
            {content}
        </Head>
    )
}

export default Typo
