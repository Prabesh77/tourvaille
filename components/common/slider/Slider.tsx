import Slider from "react-slick"
import React from "react"
import "slick-carousel/slick/slick.css"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import styled from "styled-components"
import MainCard from "../ui/cards/MainCard"
import { Place } from "../../../types/index"

const SlickWrapper = styled.div`
  margin-top: 1rem;
  .sliderContainer {
    width: 100%;
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    justify-items: center;
    div {
      outline: none;
    }
  }

  .multiItemSlider {
    @media (min-width: 1000px) {
      width: calc(100% + 24px);
    }
    /* @media (min-width: 600px) {
      width: calc(100% + 24px);
    } */
  }

  .sliderArrow {
    /* position: absolute;
    top: 45%;
    transform: translate(0, -50%);
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 10;
    background: #eee;
    border-radius: 50%; */
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
    position: absolute;
    top: 50%;
    z-index: 10;
    transform: translateY(-50%);
    cursor: pointer;

    &:hover {
      background: #ccc;
    }

    @media (max-width: 960px) {
      display: none;
    }

    // @media (hover: hover) and (pointer: fine) {
    //   @media (max-width: 960px) {
    //     display: block;
    //     left: 25px;
    //   }
    // }
  }

  .outerArrowLeft {
    left: -15px;
    
    @media (max-width: 1300px) {
      left: 25px;
    }
  }

  .outerArrowRight {
    right: -17px;
    /* @media (min-width: 1300px) {
      svg {
        fill: #4f4540;
        path {
          fill: #4f4540;
        }
      }
    } */
    @media (max-width: 1300px) {
      right: 25px;
    }
  }

  .sliderArrowBox {
    position: absolute;
    display: flex;
    top: -55px;
    right: 15px;
  }

  .dots {
    display: none !important;
    vertical-align: middle;
    margin-top: 16px;
    padding: 0;
    border-radius: 40px;
    min-width: 70px;
    text-align: center;
    margin-bottom: 0;

    // @media (max-width: 960px) {
    //   margin-top: 16px;
    //   margin-right: 24px;
    //   max-height: 20px;
    //   overflow: hidden;
    // }

    // @media (max-width: 600px) {
    //   margin-top: 16px;
    //   margin-right: 16px;
    //   max-height: 20px;
    //   overflow: hidden;
    // }
  }

  .dots li {
    list-style: none;
    cursor: pointer;
    display: inline-block;
    margin: 0 3px;
    padding: 0;
    display: none;
  }

  .dots li button {
    border: none;
    background: #fff;
    color: transparent;
    cursor: pointer;
    display: block;
    height: 8px;
    width: 8px;
    border-radius: 7.5px;
    display: none;
  }

  .dots li[class="slick-active"] button {
    width: 25px;
    background-color: #fff;
  }
`

interface PropTypes {
  data: Place[]
  slidesToShow?: number
  dots?: boolean
  fade?: boolean
  fullScreen?: boolean
  mobileSlides?: number
  centerMode?: boolean
  infinite?: boolean
}

const SlickSlider = ({
  data,
  slidesToShow = 4,
  dots = false,
  fade = true,
  fullScreen = false,
  mobileSlides = 1,
  centerMode = true,
  infinite = true,
  ...rest
}) => {
//   let slider = React.useRef()
  let slider = React.useRef() as unknown as Slider | null;

  const next = () => {
    slider?.slickNext()
  }
  const previous = ():void => {
    slider?.slickPrev()
  }


  return (
    <SlickWrapper className="slider_wrapper">
      <div
        className={"sliderContainer" + " " + (!fullScreen && "multiItemSlider")}
      >
        <div
          onClick={previous}
          className={"sliderArrow" + " " + (!fullScreen && "outerArrowLeft")}
        >
          <FiChevronLeft />
        </div>
        <Slider
          centerMode={centerMode}
          dots={false}
          infinite={infinite}
          slidesToShow={slidesToShow}
          lazyLoad={"ondemand"}
          //   speed = {800}
          arrows={false}
          autoplay={true}
          autoplaySpeed={3000}
          ref={(c) => (slider = c)}
          dotsClass="dots"
          responsive={[
            {
              breakpoint: 1100,
              settings: {
                dots: true,
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 960,
              settings: {
                dots: true,
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: mobileSlides,
                slidesToScroll: 1,
                dots: true,
              },
            },
          ]}
          {...rest}
        >
          {data?.map((place) => (
            <MainCard key={place.id} place={place} />
          ))}
        </Slider>
        <div
          onClick={next}
          className={
            "sliderArrow" +
            " " +
           
            " " +
            (!fullScreen && "outerArrowRight")
          }
        >
          <FiChevronRight />
        </div>
      </div>
    </SlickWrapper>
  )
}

export default SlickSlider
