import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import styled from "styled-components"
import Typo from "../typo/Typo"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import Button from "../inputs/Button"
import Carousel from "../../slider/Carousel"
import GoogleMapReact from "google-map-react"
import { FaMapMarkerAlt } from 'react-icons/fa'

const DetailsWrapper = styled.div`
  width: 100%auto;
  margin-top: 2rem;
  min-height: 1000px;
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
          margin: 2rem 0;
          height: 100%auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          @media (max-width: 600px) {
            margin: 1rem 0;
          }
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
    .map-holder {
      height: calc(350px + 5rem);
      /* background: orange; */
      margin: 2rem 0;
      padding-bottom: 5rem;
      .marker-icon {
        font-size: 30px;
        color: var(--col-brand);
      }
    }
  }
`

const AdventureDetails = ({ details, type }) => {

  const checkType = type === "Trekking" ? true : false
  const lat = +details?.coordinates[0]
  const lng = +details?.coordinates[1]
  console.log(details)
  return (
    <DetailsWrapper>
      <div className="contents">
        <div className="fact-wrapper">
          <div className="left">
            <Carousel images={[details?.image]} />
          </div>

          {checkType ? (
            <div className="right">
              <h2>{details?.name}</h2>
              <div className="facts">
                <div className="key">
                  <Typo color="dark" type="paragraph">
                    Highest Access
                  </Typo>
                  <Typo color="dark" type="paragraph">
                    Duration
                  </Typo>
                  <Typo color="dark" type="paragraph">
                    Location
                  </Typo>
                  <Typo color="dark" type="paragraph">
                    Difficulty
                  </Typo>
                  <Typo color="dark" type="paragraph">
                    Accommodation
                  </Typo>
                  <Typo color="dark" type="paragraph">
                    Country
                  </Typo>
                </div>
                <div className="value">
                  <Typo color="dark" type="paragraph">
                    {details?.HighestAccess}
                  </Typo>
                  <Typo color="dark" type="paragraph">
                    {details?.Duration} Days
                  </Typo>
                  <Typo color="dark" type="paragraph">
                    {details?.ELocation}
                  </Typo>
                  <Typo color="dark" type="paragraph">
                    {details?.Grade}
                  </Typo>
                  <Typo color="dark" type="paragraph">
                    {details?.Accommodation}
                  </Typo>
                  <Typo color="dark" type="paragraph">
                    {details?.Country}
                  </Typo>
                </div>
              </div>
              <Button
                type="primary"
                size="large"
                text="Add to Favourites"
                //   onClick={""}
              />
            </div>
          ) : (
            <div className="right">
              <h2>{details?.name}</h2>
              <div className="facts">
                <div className="key">
                  <Typo color="dark" type="paragraph">
                    Rafting starts
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
                    {details?.RaftingStarts}
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
                //   onClick={""}
              />
            </div>
          )}
        </div>
        <div className="description">
          <Typo color="dark" type="subHeading">
            Details
          </Typo>
          <Typo type="paragraph" color="dark">
            {details?.desc}
          </Typo>
        </div>

        {details?.coordinates && <div className="map-holder">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDCE0RsOcv9pm1E_c1NfBR23CK5YxFPIEE",
            }}
            defaultCenter={{ lat, lng}}
            center={{ lat, lng}}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={""}
          >
              {/* @ts-ignore */}
              <FaMapMarkerAlt lat={lat}
              lng={lng}
              key={1} className="marker-icon" />
          </GoogleMapReact>
        </div>}
      </div>
    </DetailsWrapper>
  )
}

export default AdventureDetails
