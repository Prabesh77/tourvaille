
import styled from 'styled-components'

const StyledButton = styled.div`
    button {
        border: none;
        color: var(--col-white);
        border-radius: 4px;
        /* margin: 1rem; //temp */
        box-shadow: var(--main-shadow);
        font-weight: 500;
        cursor: pointer;
        &:hover {
            filter: brightness(1.1) ;
        }
    }
    .primary {
        background: var(--col-brand);
    }
    .secondary {
        background: var(--col-blue);
    }
    .outlined {
        background: var(--col-white);
        color: var(--col-black);
        border: 1px solid var(--col-black);
    }
    .small {
        padding: 7px 1.5rem;
    }
    .medium {
        padding: 8px 2rem;
    }
    .large {
        padding: 8px 3rem;
    }
`

// interface ButtonProps {
//     type: String
//     text: String
//     size: String
//     onClick?: Function

// }

const Button = ({type, text, size, ...props}) => {
    return (
        <StyledButton> 
            <button className={`${type} ${size}`} {...props}>
                {text}
            </button>
        </StyledButton>
    )
}

export default Button
