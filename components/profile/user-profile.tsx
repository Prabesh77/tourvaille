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
  min-height: 50vh;
 margin-top: 5rem;
 h1 {
   text-align: center;
   margin: 1.5rem 0;
   font-size: 30px;
   span {
     color: var(--col-brand);
   }
 }
 p {
  text-align: center;
  cursor: pointer;
  font-weight: 500;
 }
`

function UserProfile() {
  // Redirect away if NOT auth
  const { data: session, status } = useSession()
  const [isLoading, setIsLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)

  console.log('user', session)

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
      <h1>Welcome <span>{session?.user?.email}</span></h1>
      <p onClick={() => setShowForm(!showForm)}>Reset Password?</p>
     {showForm && <ProfileForm onChangePassword={changePasswordHandler}/>} 
    </ProfileWrapper>
  )
}

export default UserProfile
