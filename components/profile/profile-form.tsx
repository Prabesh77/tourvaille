
import { useRef } from 'react'
import Button from '../common/ui/inputs/Button'
// import classes from './profile-form.module.css'
import styled from 'styled-components'

const FormWrapper = styled.form`
  h1 {
    margin: 0;
    text-align: center;
    font-size: 30px;
  }
  height: 100%;
  width: 400px;
  margin: 0 auto;
  .form-group {
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    width: 400px;
    label {
      font-size: 12px;
      color: var(--col-brand);
      font-weight: 500;
      margin: 3px 0;
    }
    input {
      height: 34px;
      border: none;
      background: var(--col-white);
      outline: none;
      padding: 0 1rem;
      border-radius: 4px;
    }
  }
  .action-buttons {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    align-items: flex-start;
    span {
      font-size: 13px;
      margin-top: 12px;
      color: var(--col-teal);
      /* text-decoration: underline; */
      cursor: pointer;
    }
  }
`

function ProfileForm(props) {
  const oldPasswordRef = useRef<HTMLInputElement>()
  const newPasswordRef = useRef<HTMLInputElement>()

  const submitHandler = (event) => {
    event.preventDefault()
    const enteredOldPassword = oldPasswordRef.current.value
    const enteredNewPassword = newPasswordRef.current.value
    props.onChangePassword({
        oldPassword: enteredOldPassword,
        newPassword: enteredNewPassword
    })
  }

  return (
    <FormWrapper onSubmit={submitHandler}>
      <h1>Reset Password</h1>
      <div className='form-group'>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordRef}/>
      </div>
      <div className='form-group'>
        <label htmlFor='old-password'>Old Password</label>
        <input type='password' id='old-password' ref={oldPasswordRef}/>
      </div>
      <div className='action-buttons'>
        <Button type="primary" text="Change Password" size="large"/>
      </div>
    </FormWrapper>
  );
}

export default ProfileForm;
