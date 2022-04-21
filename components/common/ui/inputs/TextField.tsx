
import styled from 'styled-components'
import { useForm } from "react-hook-form"

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

const TextField = ({ label, ...props }) => {
    const {
        register,
        formState: { errors },
      } = useForm()

    const name = label
    return (
        <StyledTextField>
            {/* <label>
                {label}
            </label>
            <input {...props} type="text" onChange={(e) => onChange(e.target.value)}/> */}

            <label htmlFor="email">{label}</label>
          <input
            type="text"
            {...props}
          />
          {errors.name && (
            <span className="error-message">This field is required</span>
          )}
        </StyledTextField>
    )
}

export default TextField
