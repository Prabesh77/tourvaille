import { useContext, useState } from "react"
import Notify from "../common/other/Notify"

import NotificationContext from "../../store/notification-store"
import Navbar from "../common/ui/nav/Navbar"
import Modal from "../common/ui/modal/Modal"
import AuthForm from "../auth/auth-form"
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Header from "../screen/Map/common/MapHeader"
import DataContext from "../../store/data-store"
import Footer from "../common/ui/nav/Footer"

const LayoutWrapper = styled.div`
   height: ${props => props.isModalOpened? '100vh': 'auto'};
   overflow: ${props => props.isModalOpened? 'hidden': ''};
`

function Layout(props) {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false);
  const notificationCtx = useContext(NotificationContext)
  const { coordinates, setCoordinates} = useContext(DataContext)
  const activeNotification = notificationCtx.notification

  const renderTypeOfNav = () => {
    if(router.asPath.includes('find')) {
      return <Header setShowModal={setShowModal} setCoordinates={setCoordinates}/>
    }
    else if(router.asPath === '/admin') {
      return null
    }
    else {
      return <Navbar setShowModal={setShowModal}/>
    }
  }
  return (
    <LayoutWrapper isModalOpened={showModal}>
      {/* {!router.asPath.includes('find')? <Navbar setShowModal={setShowModal}/>: router.asPath !== '/admin'? <Header setShowModal={setShowModal} setCoordinates={setCoordinates}/>: null} */}
      {renderTypeOfNav()}

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
        {router.asPath !== '/admin' && <Footer />}
    </LayoutWrapper>
  )
}

export default Layout
