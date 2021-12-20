import { useState } from "react"
import Image from "next/image"
import styled from "styled-components"
import Link from "next/link"
import { HiOutlineHeart, HiHeart } from "react-icons/hi"
import { motion, AnimatePresence } from "framer-motion"

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
  place: Place
}

const AdventureCard = ({ place, type }) => {
  const [favourite, setFavourite] = useState<Boolean>(false)
  const checkType = type === 'Trekking'?true:false
  return (
    <CardWrapper>
      <div className="add_to_favourite">
        {/* {favourite ?  <HiHeart className="icon" onClick={() => setFavourite(!favourite)}/>: <HiOutlineHeart className="icon" onClick={() => setFavourite(!favourite)}/>} */}
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
                onClick={() => setFavourite(!favourite)}
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
                onClick={() => setFavourite(!favourite)}
              />
            </motion.div>
          )}
        </AnimatePresence>
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
