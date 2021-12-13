import { useContext, useState } from "react"
import Notify from "../common/other/Notify"

import MainNavigation from "./main-navigation"
import NotificationContext from "../../store/notification-store"
import Navbar from "../common/ui/nav/Navbar"
import Modal from "../common/ui/modal/Modal"
import AuthForm from "../auth/auth-form"
import styled from 'styled-components'
import { useRouter } from 'next/router'

const LayoutWrapper = styled.div`
   height: ${props => props.isModalOpened? '100vh': 'auto'};
   overflow: ${props => props.isModalOpened? 'hidden': ''};
`

function Layout(props) {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false);
  const notificationCtx = useContext(NotificationContext)

  const activeNotification = notificationCtx.notification
  console.log(router)
  return (
    <LayoutWrapper isModalOpened={showModal}>
      {!router.asPath.includes('find') && <Navbar setShowModal={setShowModal}/>}

      <main>{props.children}</main>
      {/* {activeNotification && ( */}
        <Notify
          title={activeNotification?.title}
          message={activeNotification?.message}
          status={activeNotification?.status}
        />
      {/* )} */}
    
      <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        >
          <AuthForm setShowModal={setShowModal}/>
        </Modal>
    </LayoutWrapper>
  )
}

export default Layout
