import { useState, useEffect } from "react"
import styled from "styled-components"
import { MdClose } from "react-icons/md"

const ModalWrapper = styled.div`
  
  .backdrop {
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    position: fixed;
    z-index: 51;
  }

  .contents {
    min-height: 100px;
    max-height: 600px;
    width: 400px;
    background: var(--col-white);
    position: absolute;
    z-index: 52;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    padding: 1rem;
    overflow-y: scroll;
    .close {
      position: absolute;
      right: 0.6rem;
      top: 0.6rem;
      cursor: pointer;
      .icon {
        font-size: 22px;
      }
    }
    &::-webkit-scrollbar {
    width: 4px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  &::-webkit-scrollbar-thumb {
    background: var(--col-brand);
    border-radius: 15px;

  }
  }
`

interface ModalProps {
  show: Boolean
  onClose: Function
  children: React.ReactNode
  title?: String
}

const Modal = ({ show, onClose, children, title }: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const handleCloseClick = () => {
    onClose()
  }
  return show ? (
    <ModalWrapper>
      <div className="backdrop" onClick={() => onClose()}></div>
      <div className="contents">
        <span className="close" onClick={handleCloseClick}>
          <MdClose className="icon" />
        </span>
        <h2>{title}</h2>
        {children}
      </div>
    </ModalWrapper>
  ) : null
}

export default Modal
