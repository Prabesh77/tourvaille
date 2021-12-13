import React from "react"
import styled from "styled-components"
import { Rating } from "@material-ui/lab"
import { FaTripadvisor } from 'react-icons/fa'
import { VscGlobe } from 'react-icons/vsc'
import { FiPhone } from 'react-icons/fi'

const CardWrapper = styled.div`
  padding: 1rem;
  background: var(--col-white);
  margin: 10px 0;
  min-height: 300px;
  width: 340px;
  margin: 1rem auto;
  .name {
    font-size: 18px;
    font-weight: 600;
  }
  .reviews {
    display: flex;
    align-items: center;
    margin: 8px 0;
    span {
      font-size: 18px;
    }
    p {
      font-size: 14px;
      margin-left: 8px;
      font-weight: 500;
    }
  }
  .address {
    font-size: 14px;
  }
  .open-closed {
    font-size: 10px;
    background: green;
    display: inline-block;
    padding: 3px 8px;
    color: #fff;
    border-radius: 25px;
    text-transform: uppercase;
    font-weight: 500;
    margin: 8px 0;
  }
  .phone {
      font-size: 13px;
      font-weight: 600;
      margin: 4px 0;
  }
  .img-holder {
    height: 200px;
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .price {
    color: var(--col-success);
    font-weight: 700;
    font-size: 12px;
    margin: 4px 0;
  }
  .ranking {
    color: var(--col-brand);
    font-weight: 700;
    font-size: 12px;
  }
  .links {
    width: 300px;
    display: flex;
    margin-top: 1rem;
    .trip-advisor {
        font-size: 1.8rem;
        color: #00AA6C;
        cursor: pointer;
    }
    .website {
        font-size: 1.8rem;
        color:var(--col-teal);
        margin-left: 1rem;
        cursor: pointer;
    }
  }
`

const MapCard = ({ place, selected, refProp }) => {
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  return (
    <CardWrapper>
      <p className="name">{place?.name}</p>
      <div className="reviews">
        <Rating value={place?.rating} readOnly />{" "}
        <p>of {place?.num_reviews} reviews</p>
      </div>
      <p className="address">{place?.address}</p>
      <p className="open-closed">{place?.isClosed ? "Closed" : "Open"}</p>
      <p className="phone"> < FiPhone />&nbsp;{place?.phone}</p>

      <div className="img-holder">
        <img src={place?.photo?.images?.original?.url} alt="" />
      </div>
      <p className="price">Price: {place?.price_level}</p>
      <p className="ranking">{place?.ranking}</p>

      <div className="links">
        {" "}
        <p
          className="trip-advisor"
          onClick={() => window.open(place?.web_url, "_black")}
        >
          {/* {place?.web_url} */}
          < FaTripadvisor />
        </p>
        <p
          className="website"
          onClick={() => window.open(place?.website, "_black")}
        >
          {/* {place?.website} */}
          < VscGlobe />
        </p>
      </div>
    </CardWrapper>
  )
}

export default MapCard
