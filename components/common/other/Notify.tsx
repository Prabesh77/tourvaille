import React, { useEffect, useContext } from "react"
import NotificationContext from "../../../store/notification-store"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"

const NotifyWrapper = styled.div`
  div {
    width: 250px;
    height: 32px;
    padding: 8px 0;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 3px;
    position: absolute;
    bottom: 1rem;
    z-index: 60;
    p:nth-child(1) {
      text-transform: uppercase;
    }
    p {
      font-size: 12px;
    }
  }

  .pending {
    background: rgb(29, 134, 204);
  }

  .error {
    background: rgb(199, 72, 13);
  }

  .success {
    background: rgb(29, 230, 119);
  }
`

export const Animation = {
  initial: { right: -2500 },
  animate: {
    opacity: 1,
    right: 25,
    transition: { duration: 0.3 },
  },
  exit: { right: -2500 },
}

const Notify = (props) => {
  const notificationCtx = useContext(NotificationContext)

  const { title, message, status } = props

  let getColorClass

  if (status === "pending") {
    getColorClass = `pending`
  } else if (status === "success") {
    getColorClass = `success`
  } else {
    getColorClass = `error`
  }

  return (
    <AnimatePresence>

      {status && (
        <NotifyWrapper>
        <motion.div
          variants={Animation}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`${getColorClass}`}
          onClick={() => notificationCtx.hideNotification()}
        >
          <p>{title}</p> <p>{message}</p>
        </motion.div>
        </NotifyWrapper>
      )}
    </AnimatePresence>
  )
}

export default Notify
