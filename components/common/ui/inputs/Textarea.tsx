
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

    textarea {
        background: var(--col-white);
        border: none;
        width: 300px;
        border-radius: 4px;
        padding: 0.3rem 1rem;
    }
`

const TextArea = ({ label, onChange }) => {
    return (
        <StyledTextField>
            <label>
                {label}
            </label>
            <textarea onChange={(e) => onChange(e.target.value)} rows={10} cols={50}></textarea>
        </StyledTextField>
    )
}

export default TextArea
