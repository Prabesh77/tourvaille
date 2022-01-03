import { useState, useContext } from "react"
import Image from "next/image"
import styled from "styled-components"
import Link from "next/link"
import { HiOutlineHeart, HiHeart } from "react-icons/hi"
import { motion, AnimatePresence } from "framer-motion"
import { useSession, getSession } from "next-auth/react"
import NotificationContext from "../../../../store/notification-store"

const IconVariant = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.4 } },
  exit: { x: 20, opacity: 0 },
}

const CardWrapper = styled.section`
  min-height: 309px;
  width: 230px;
  /* min-width: 250px; */
  border-radius: 4px 4px 0 0;
  overflow: hidden;
  position: relative;
  .add_to_favourite {
    /* padding: 6px; */
    display: flex;
    position: absolute;
    /* background: red; */
    width: 20px;
    right: 6px;
    top: 6px;
    z-index: 1;
    .icon {
      font-size: 22px;
      cursor: pointer;
      color: var(--col-brand);
    }
  }
  .image {
    width: 100%;
  }

  .detail {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
    .left {
      /* width: 140px; */
      margin-right: 0;
      p {
        font-size: 15px;
        font-weight: 600;
      }
      span {
        font-size: 14px;
        font-weight: 500;
      }
    }
    .right {
      width: 65px;
      text-align: right;
      p {
        font-size: 15px;
      }
    }
  }
`

interface Place {
  id: number
  name: string
  location: string
  price: number
  image: string
}

interface Props {
  place: any
  type: String
  refresh?: any
}

const AdventureCard = ({ place, type, refresh }: Props) => {
  const { data: session, status } = useSession()
  const [favourite, setFavourite] = useState<Boolean>(false)
  const [checkAuth, setCheckAuth] = useState<Boolean>()
  // const checkType = type === "Trekking" ? true : false

  const notificationCtx = useContext(NotificationContext)

  const handleAddToFavourite = async (p, t) => {
    getSession().then((session) => {
      // setLoadedSession(session)
      if (!session) {
        setCheckAuth(false)
        notificationCtx.showNotification({
          title: "",
          message: "You should be logged in for this action",
          status: "error",
        })
      } else {
        setCheckAuth(true)
        if (favourite === true) {
          setFavourite(false)
          notificationCtx.showNotification({
            title: "",
            message: "Removed from favourite",
            status: "success",
          })
        } else if (favourite === false) {
          fetch(`http://localhost:3000/api/travel/favourites`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({
              ...place,
              type,
              user: session?.user?.email,
            }), // body data type must match "Content-Type" header
          })
          setFavourite(true)
          notificationCtx.showNotification({
            title: "",
            message: "Added to favourite",
            status: "success",
          })
        }
      }
    })
    // console.log(p, t)
  }

  const handleRemoveFromFavourites = (p, t) => {
    getSession().then((session) => {
      // setLoadedSession(session)
      if (!session) {
        setCheckAuth(false)
        notificationCtx.showNotification({
          title: "",
          message: "You should be logged in for this action",
          status: "error",
        })
      } else {
        fetch(`http://localhost:3000/api/travel/favourites`, {
          method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify({user: session?.user?.email, _id: p?._id}) // body data type must match "Content-Type" header
        });
        setFavourite(false)
        refresh(true)
        notificationCtx.showNotification({
          title: "",
          message: "Removed from favourites",
          status: "success",
        })
      }
    })
  }

  return (
    <CardWrapper>
      {/* {checkAuth === false && <span>Please sign in.</span>} */}
      <div className="add_to_favourite">
        {/* {favourite ?  <HiHeart className="icon" onClick={() => setFavourite(!favourite)}/>: <HiOutlineHeart className="icon" onClick={() => setFavourite(!favourite)}/>} */}
        {place?.user ? (
          <AnimatePresence exitBeforeEnter>
            <motion.div
              variants={IconVariant}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <HiHeart
                className="icon"
                onClick={() => {
                  handleRemoveFromFavourites(place, type)
                }}
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          <>
            <AnimatePresence exitBeforeEnter>
              {favourite && (
                <motion.div
                  variants={IconVariant}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <HiHeart
                    className="icon"
                    onClick={() => {
                      handleAddToFavourite(place, type)
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
              {!favourite && (
                <motion.div
                  variants={IconVariant}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <HiOutlineHeart
                    className="icon"
                    onClick={() => {
                      handleAddToFavourite(place, type)
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {/* <HiOutlineHeart className="icon" onClick={() => setFavourite(!favourite)}/> */}
      </div>
      <Link href={`/${type}/${place?.name}`}>
        <a>
          <div className="image">
            <Image
              src={place?.image}
              alt=""
              height="600"
              width="554"
              objectFit="cover"
            />
          </div>
          <div className="detail">
            <div className="left">
              <p>{place?.name}</p>
              <span>{place?.ELocation}</span>
            </div>
            <div className="right">{/* <p> {Duration}</p> */}</div>
          </div>
        </a>
      </Link>
    </CardWrapper>
  )
}

export default AdventureCard
