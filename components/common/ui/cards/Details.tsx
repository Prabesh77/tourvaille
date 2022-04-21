import { useState, useEffect, useRef, useContext } from "react"
import Image from "next/image"
import styled from "styled-components"
import Typo from "../typo/Typo"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import Button from "../inputs/Button"
import Carousel from "../../slider/Carousel"
import { Rating } from "@material-ui/lab"
import GoogleMapReact from "google-map-react"
import { FaMapMarkerAlt, FaTripadvisor } from "react-icons/fa"
import { VscGlobe } from "react-icons/vsc"
import NotificationContext from "../../../../store/notification-store"

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
        .reviews {
          display: flex;
          margin: 12px 0;
          height: 20px;
          width: 100%;
          span {
            font-size: 16px;
          }
          p {
            font-size: 14px;
            font-weight: 500;
          }
        }
        .ranking {
          color: var(--col-brand);
          font-weight: 700;
          font-size: 12px;
        }
        .detail_title {
          span.status {
            font-size: 10px;
            padding: 4px 8px;
            color: #fff;
            border-radius: 25px;
          }

          span.open_status {
            background: var(--col-success);
          }

          span.closed_status {
            background: var(--col-danger);
          }
        }
        .facts {
          margin-bottom: 1rem;
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
        .links {
          width: 100px;
          display: flex;
          margin-top: 5px;
          .trip-advisor {
            font-size: 1.5rem;
            color: #00aa6c;
            cursor: pointer;
          }
          .website {
            font-size: 1.5rem;
            color: var(--col-teal);
            /* margin-left: 1rem; */
            cursor: pointer;
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

const Details = ({ details }) => {
  console.log(details, "DETAILS👋")
  const notificationCtx = useContext(NotificationContext)
  const [addToFav, setAddToFav] = useState(false)
  return (
    <DetailsWrapper>
      <div className="contents">
        <div className="fact-wrapper">
          <div className="left">
            <Carousel
              images={[
                details?.photo?.images?.original?.url ||
                  details?.photo?.images?.medium?.url ||
                  "/no_image.png",
              ]}
            />
          </div>

          <div className="right">
            <div className="detail_title">
              <h2>{details?.name}</h2>
              <span
                className={`${
                  details?.is_closed
                    ? "status closed_status"
                    : "status open_status"
                }`}
              >
                {details?.is_closed ? "Closed" : "Open Now"}
              </span>
              <div className="reviews">
                <div>
                  <Rating value={details?.rating} readOnly />
                </div>
                <p>of {details?.num_reviews} reviews</p>
              </div>
              {details?.ranking && (
                <p className="ranking">{details?.ranking}</p>
              )}
              <div className="links">
              {" "}
              <p
                className="trip-advisor"
                onClick={() => window.open(details?.web_url, "_black")}
              >
                {/* {place?.web_url} */}
                <FaTripadvisor />
              </p>
              <p
                className="website"
                onClick={() => window.open(details?.website, "_black")}
              >
                {/* {place?.website} */}
                <VscGlobe />
              </p>
            </div>
            </div>
            <div className="facts">
              <div className="key">
                <Typo color="dark" type="paragraph">
                  Location
                </Typo>
                <Typo color="dark" type="paragraph">
                  Type
                </Typo>
                <Typo color="dark" type="paragraph">
                  Phone
                </Typo>
                <Typo color="dark" type="paragraph">
                  Category
                </Typo>
                {details?.cuisine && (
                  <Typo color="dark" type="paragraph">
                    Cuisine
                  </Typo>
                )}
                {(details?.hotel_class || details?.cuisine) && (
                  <Typo color="dark" type="paragraph">
                    Price
                  </Typo>
                )}
              </div>
              <div className="value">
                <Typo color="dark" type="paragraph">
                  {/* {details?.address_obj?.street1}  {details?.address_obj?.city}  {details?.address_obj?.country} */}
                  {details?.location_string}
                </Typo>
                <Typo color="dark" type="paragraph">
                  {/* {details?.subtype[0]?.name} */}
                  {details?.hotel_class
                    ? "Hotel"
                    : details?.cuisine
                    ? "Restaurant"
                    : details?.subtype[0]?.name}
                </Typo>
                <Typo color="dark" type="paragraph">
                  {details?.phone || "-"}
                </Typo>
                <Typo color="dark" type="paragraph">
                  {details?.hotel_class
                    ? details?.subcategory_type
                    : details?.cuisine
                    ? details?.subcategory[0]?.name
                    : details?.category?.name}
                </Typo>
                {details?.cuisine && (
                  <Typo color="dark" type="paragraph">
                    {details?.cuisine?.map((c) => (
                      <span key={c.key}>{c.name}, </span>
                    ))}
                  </Typo>
                )}
                {(details?.hotel_class || details?.cuisine) && (
                  <Typo color="dark" type="paragraph">
                    {details?.price}
                  </Typo>
                )}
              </div>
            </div>
            
            <Button
              type={addToFav? 'secondary': 'primary'}
              size="large"
              text="Add to Favourites"
              onClick={() => {
                setAddToFav(!setAddToFav)
                notificationCtx.showNotification({
                  title: "",
                  message: "Added to favourite!",
                  status: "success",
                })
              }}
            />
          </div>
        </div>
        {(details?.description || details?.hotel_class_attribution) && (
          <div className="description">
            <Typo color="dark" type="subHeading">
              Details
            </Typo>
            <Typo type="paragraph" color="dark">
              {details?.hotel_class_attribution
                ? details?.hotel_class_attribution
                : details?.description}
            </Typo>
          </div>
        )}
        {details?.latitude && (
          <div className="map-holder">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyDCE0RsOcv9pm1E_c1NfBR23CK5YxFPIEE",
              }}
              defaultCenter={{
                lat: +details?.latitude,
                lng: +details?.longitude,
              }}
              center={{ lat: +details?.latitude, lng: +details?.longitude }}
              defaultZoom={14}
              margin={[50, 50, 50, 50]}
              options={""}
            >
              {/* @ts-ignore */}
              <FaMapMarkerAlt lat={+details?.latitude}
                lng={+details?.longitude}
                key={2}
                className="marker-icon"
              />
            </GoogleMapReact>
          </div>
        )}
      </div>
    </DetailsWrapper>
  )
}

export default Details
