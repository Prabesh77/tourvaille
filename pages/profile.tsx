import React from "react"
import PageHead from "../components/common/other/Head"
import UserProfile from "../components/profile/user-profile"

const profile = () => {
  return (
    <>
      <PageHead
        title="Admin"
        name="Tourvaille."
        content="Make your trip best memory with us."
      />
      <div>
        <UserProfile />
      </div>
    </>
  )
}

export default profile
