
import styled from 'styled-components'

const StyledTextField = styled.div`
    display: flex;
    flex-direction: column;
    label {
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        color: var(--col-brand);
        margin-bottom: 4px;
    }

    input {
        background: #fff;
        border: none;
        height: 38px;
        width: 300px;
        border-radius: 4px;
        padding: 0 1rem;
    }
`

const TextField = ({ label, onChange, ...props }) => {
    return (
        <StyledTextField>
            <label>
                {label}
            </label>
            <input {...props} type="text" onChange={(e) => onChange(e.target.value)}/>
        </StyledTextField>
    )
}

export default TextField
