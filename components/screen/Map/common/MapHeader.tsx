import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { RiMenu3Fill } from "react-icons/ri"
import { HiOutlineSearch, HiOutlineUserCircle } from "react-icons/hi"
import Link from 'next/link'
import { Autocomplete } from '@react-google-maps/api';

const Nav = styled.div`
  min-height: 60px;
  background: var(--col-white);
  width: 100%;
  color: #555;
  position: sticky;
  top: 0;
  z-index: 50;
  /* box-shadow: -4px 12px 30px -22px rgba(255, 255, 255, 1);
  -webkit-box-shadow: -4px 12px 30px -22px rgba(255, 255, 255, 0.37);
  -moz-box-shadow: -4px 12px 30px -22px rgba(255, 255, 255, 0.37); */

  box-shadow: -3px 49px 33px -24px rgba(0,0,0,0.32);
-webkit-box-shadow: -3px 49px 33px -24px rgba(0,0,0,0.32);
-moz-box-shadow: -3px 49px 33px -24px rgba(0,0,0,0.32);

  ._nav-container {
    max-width: 1130px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1024px) {
      padding: 0 1rem;
    }

    @media(max-width: 768px) {
        flex-direction: column;
    }

    ._logo {
      width: 30%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      @media (max-width: 768px) {
        width: 100%;
      }

      p {
        font-size: 18px;
        color: var(--col-brand);
        line-height: 18px;
        font-weight: 600;
        @media (max-width: 600px) {
          font-size: 14px;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
      }
    }

    ._nav {
      width: 70%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;

      @media(max-width: 768px) {
          width: 100%;
      }

      ul {
        width: 100%;
        height: 60px ;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0px;

        @media (max-width: 768px) {
        }

        .explore {
            @media(max-width: 768px) {
                position: absolute;
                top: 0;
                right: 0;
            }
        }

        form {
          display: flex;
          align-items: center;
          input {
            background: #fff;
            border: none;
            height: 38px;
            width: 300px;
            border-radius: 4px;
            padding: 0 1rem;

            @media(max-width: 768px) {
                width: 250px;
            }
          }
          button {
            border: none;
            background: var(--col-brand);
            color: var(--col-white);
            border-radius: 0 4px 4px 0;
            font-weight: 500;
            height: 38px;
            /* width: 40px; */
            margin-left: --5px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
              filter: brightness(1.1);
            }
          }
        }

        .user-options {
            display: flex;
            align-items: center;
            @media(max-width: 768px) {
              display: none;
            }
            button {
                margin-right:10px;

            }
        }

        a {
          text-decoration: none;
          font-size: 14px;
        }

        li {
          color: #555;
        }
        button {
          border: none;

          padding: 6px 1rem;
          border-radius: 4px;
        }
        .normal-btn {
          background: #fff;
        }
        .active-btn {
          background: var(--col-brand);
          color: #eee;
        }
      }
    }
   
  } 
`
export default function Header({setShowModal, setCoordinates}) {
  const [menu, setMenu] = useState(false)

  const [autoComplete, setAutoComplete] = useState(null)

  const onLoad = (autoC) => {
      setAutoComplete(autoC)
  }

  const onPlaceChanged = () => {
      const lat = autoComplete.getPlace().geometry.location.lat()
      const lng = autoComplete.getPlace().geometry.location.lng()
      setCoordinates({lat, lng})
  }

  const [effect, setEffect] = useState(false)
  const handleScroll = () => {
    if (window.pageYOffset > 150) {
      setEffect(true)
    } else {
      setEffect(false)
    }
    // console.log(window.pageYOffset)
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [effect])

  return (
    <Nav>
      <div className="_nav-container">
        <div className="_logo">
          <p><Link href="/" passHref><a>TourVaille.</a></Link></p>
        </div>
        <nav className="_nav">
          <ul>
            <form>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <input type="text" placeholder="Search" />
              </Autocomplete>
              <button>
                <HiOutlineSearch style={{ fontSize: "25px" }} />
              </button>
            </form>
            <a href="#service" className="explore">
              <li> <Link href="/explore" passHref><a>Explore anywhere?</a></Link></li>
            </a>
            <div className="user-options" onClick={() => setShowModal(true)}>
              <button className={!effect ? "normal-btn" : "active-btn"}>
              <HiOutlineUserCircle style={{fontSize: '18px'}}/>
              </button>
            <p className="hamburger" onClick={() => setMenu(!menu)}>
              <RiMenu3Fill />
            </p>
            </div>
          </ul>
        </nav>
      </div>
    </Nav>
  )
}

