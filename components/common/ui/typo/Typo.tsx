
import styled from 'styled-components'

const Head = styled.h2`
    font-size: 40px;
    font-size:${props => props.type === 'heading'? '40px':  props.type === 'subHeading'? '24px':  props.type === 'paragraph'? '14px': '16px' } ;
    font-weight:${props => props.type === 'paragraph'? '400': props.type === ""? '500': '600' } ;
    color:${props => props.color === 'dark'? 'var(--col-black)': 'var(--col-white)' } ;
`

interface TypeProps {
    color: String
    type: String
    children: React.ReactNode
}

const Typo = ({ color,  type, children, ...props}) => {
    return (
        <Head className={type} color={color} type={type} {...props}>
            {children}
        </Head>
    )
}

export default Typo
