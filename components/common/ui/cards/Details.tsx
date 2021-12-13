import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import styled from "styled-components"
import Typo from "../typo/Typo"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import Button from "../inputs/Button"
import Carousel from "../../slider/Carousel"

const DetailsWrapper = styled.div`
  width: 100%auto;
  margin-top: 2rem;
  @media (max-width: 768px) {
    margin-top: 0;
  }
  .contents {
    max-width: 1130px;
    height: 600px;
    margin: 0 auto;

    .fact-wrapper {
      display: flex;
      /* height: 400px; */
      @media (max-width: 768px) {
        flex-direction: column;
      }
      .left {
        width: 50%;
        height: 100%;
        max-height: 350px;
        border-radius: 4px;
        /* background: orange; */
        /* overflow-y: hidden; */
        position: relative;
        @media (max-width: 768px) {
          width: 100%;
        }
        img {
          height: 100%;
          width: 100%;
        }

        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          height: 30px;
          width: 30px;
          border-radius: 50%;
          font-size: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: var(--col-white);
          color: var(--col-brand);
          cursor: pointer;

          &:hover {
            background: #ccc;
          }
        }

        .slider-right {
          right: 0;
        }
        .slider-left {
          left: 0;
        }
        .img-holder {
          max-height: 100%;
          min-width: 100%;
        }
      }
      .right {
        width: 50%;
        height: 100%;
        padding-left: 2rem;
        display: flex;
        flex-direction: column;
        position: relative;
        justify-content: space-between;
        @media (max-width: 768px) {
          width: 100%;
          padding-left: 1rem;
        }
        button {
          margin-left: 0;
          /* position: absolute; */
          bottom: 5px;
        }
        .facts {
          margin-top: 2rem;
          height: 100%auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .key {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 40%;
            h2 {
              margin: 8px 0;
              font-weight: 500;
            }
          }
          .value {
            width: 60%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h2 {
              margin: 8px 0;
            }
          }
        }
      }
    }
    .description {
      margin-top: 1.5rem;
      @media (max-width: 768px) {
        padding-left: 1rem;
      }
      h2 {
        line-height: 20px;
      }

      h2:nth-child(1) {
        margin: 1rem 0;
        font-size: 16px;
      }
    }
  }
`

const Details = () => {
  const [currentWidth, setCurrentWidth] = useState()
  const images = [
    "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/2245411/pexels-photo-2245411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  ]

  const ref = useRef(null)
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset
  }

  useEffect(() => {
    setCurrentWidth(ref?.current?.offsetWidth)
  }, [])
  return (
    <DetailsWrapper>
      <div className="contents">
        <div className="fact-wrapper">
          <div className="left">
            {/* <div className="slider-image-holder" ref={ref}>
              {images?.map((image) => (
                <div key={image} className="img-holder">
                  {" "}
                  <Image src={image} alt="" height="425" width="600" />{" "}
                </div>
              ))}
            </div> */}
            {/* <div className="slider-image-holder" ref={ref}> */}
            <Carousel images={images} />
            {/* </div> */}
            {/* <div
              className="slider-btn slider-right"
              onClick={() => scroll(currentWidth)}
            >
              <MdKeyboardArrowRight />
            </div>
            <div
              className="slider-btn slider-left"
              onClick={() => scroll(-Number(currentWidth))}
            >
              <MdKeyboardArrowLeft />
            </div> */}
          </div>

          <div className="right">
            <h2>Bali, Indonesia</h2>
            <div className="facts">
              <div className="key">
                <Typo color="dark" type="paragraph">
                  Otion one
                </Typo>
                <Typo color="dark" type="paragraph">
                  Option Two
                </Typo>
                <Typo color="dark" type="paragraph">
                  Option Three
                </Typo>
                <Typo color="dark" type="paragraph">
                  Option Four
                </Typo>
                <Typo color="dark" type="paragraph">
                  Option Five
                </Typo>
                <Typo color="dark" type="paragraph">
                  Option Six
                </Typo>
              </div>
              <div className="value">
                <Typo color="dark" type="paragraph">
                  OTypotion one
                </Typo>
                <Typo color="dark" type="paragraph">
                  OTypotion Two
                </Typo>
                <Typo color="dark" type="paragraph">
                  OTypotion Three
                </Typo>
                <Typo color="dark" type="paragraph">
                  OTypotion Four
                </Typo>
                <Typo color="dark" type="paragraph">
                  OTypotion Five
                </Typo>
                <Typo color="dark" type="paragraph">
                  OTypotion Six
                </Typo>
              </div>
            </div>
            <Button
              type="primary"
              size="large"
              text="Add to Favourites"
              onClick={""}
            />
          </div>
        </div>
        <div className="description">
          <Typo color="dark" type="subHeading">
            Details
          </Typo>
          <Typo type="paragraph" color="dark">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            error eum quis quos cupiditate quia quae non exercitationem iure,
            deserunt laboriosam doloribus obcaecati vero ullam, rerum nemo nam
            quidem iusto maxime accusantium est necessitatibus saepe. Quis
            laboriosam doloremque expedita et officiis repellendus illo a
            blanditiis eveniet, recusandae quidem cumque maiores veritatis
            quibusdam atque ullam sed dolorem illum tempore molestias at.
            Maiores repellat amet fugiat mollitia eligendi illum exercitationem
            alias nulla animi labore. Eum ipsam itaque et temporibus earum? Hic,
            modi iure. Nam laborum reiciendis repellendus illum sint corrupti ab
            culpa, fuga quibusdam iste, natus eius alias eveniet deserunt quae
            pariatur
          </Typo>
        </div>
      </div>
    </DetailsWrapper>
  )
}

export default Details
