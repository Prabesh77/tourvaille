import styled from "styled-components"

const StyledRadio = styled.div`
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 14px;
    font-weight: 500;
    color: var(--col-black);
    display: flex;
    align-items: center;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;

      &:checked ~ .checkmark {
        background-color: var(--col-brand) !important;
        border: none;
      }
      &:checked ~ .checkmark:after {
        display: block;
      }
    }
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 20px;
      width: 20px;
      background-color: #eee;
      border-radius: 50%;
      border: 1px solid var(--col-black);

      &:after {
        content: "";
        position: absolute;
        display: none;
      }
      &:after {
        left: 5.5px;
        top: 2px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }

    &:hover input ~ .checkmark {
      background-color: var(--col-white);
    }
  }
`

const Radio = ({ label, onChange, value }) => {
  return (
    <StyledRadio>
      <label className="container">
        {label}
        <input type="radio" name="radio" value={value} onChange={(e) => onChange(e)}/>
        <span className="checkmark"></span>
      </label>
    </StyledRadio>
  )
}

export default Radio
