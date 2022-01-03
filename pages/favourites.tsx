import React, {useState, useEffect} from "react"
import PageHead from "../components/common/other/Head"
import Favourites from "../components/screen/auth_users/Favourites"

const favourites = () => {

  return (
    <div>
      <PageHead
        title="Home"
        name="Tourvaille."
        content="Make your trip best memory with us."
      />
      <Favourites/>
    </div>
  )
}


export default favourites
