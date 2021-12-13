import { useState, useEffect } from "react"

import ProfileForm from "./profile-form"
import classes from "./user-profile.module.css"
import { useSession, getSession } from "next-auth/react"
import Loader from "../common/other/Loader"
import styled from 'styled-components'

const LoaderWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProfileWrapper = styled.div`
  /* background: #ccc; */
 margin-top: 5rem;

`

function UserProfile() {
  // Redirect away if NOT auth
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getSession().then((session) => {
      // setLoadedSession(session)
      if (!session) {
        window.location.href = "/"
      } else {
        setIsLoading(false)
      }
    })
  }, [])

  if (isLoading) {
    return <LoaderWrapper><Loader /></LoaderWrapper>
  }

  const changePasswordHandler = async (passwordData) => {
    const response = await fetch('/api/user/change-password', {
      method:'PATCH',
      body: JSON.stringify(passwordData),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    console.log(data)
  } 

  return (
    <ProfileWrapper>
      {/* <h1>Your User Profile</h1> */}
      <ProfileForm onChangePassword={changePasswordHandler}/>
    </ProfileWrapper>
  )
}

export default UserProfile
