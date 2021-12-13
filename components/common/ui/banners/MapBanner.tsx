import React from 'react'
import styled from 'styled-components'
import Button from '../inputs/Button'
import Typo from '../typo/Typo'

const MapBannerWrapper = styled.div`
    max-width: 1130px;
    height: 350px;
    background: orange;
    margin: 0 auto;
    background: url('https://images.pexels.com/photos/3714145/pexels-photo-3714145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') no-repeat center/cover;
    border-radius: 4px;
    position: relative;
    margin-top: 4rem;

    .gradient {
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3));
    z-index: 10;
    opacity: 0.4;
    overflow: hidden;
  }

  .content {
      position: absolute;
      top: 28%;
      left: 3rem;
      button {
          margin-left: 0;
          margin-top: 2rem;
      }
  }
`

const MapBanner = () => {
    return (
        <MapBannerWrapper>
            <div className="gradient"></div>
            <div className="content">
                <Typo type="heading" color="light"> Try searching in map</Typo>
                <Button type="primary" text="Search" size="large" onClick={''} />
            </div>
        </MapBannerWrapper>
    )
}

export default MapBanner
