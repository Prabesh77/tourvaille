import styled from "styled-components"
import Link from "next/link"
import Button from "../inputs/Button"
import Typo from "../typo/Typo"

const BannerWrapper = styled.div`
  height: 626px;
  width: 100%;
  /* background: url("https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    no-repeat center/cover; */
    background: url("/IMG_1183.jpg")
    no-repeat center/cover;
  position: relative;

  .gradient {
    height: 100%;
    width: 100%;
    /* background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)); */
    z-index: 10;
    opacity: 0.4;
    overflow: hidden;
  }

  .contents {
    z-index: 2;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    h2.banner-head {
      text-align: center;
      margin-top: 3rem;
      width: 100%;
    }

    .box {
      /* background: var(--col-white); */
      background: rgba(235, 238, 242, 0.7);
      /* min-width: 500px; */
      margin: 2rem auto;
      padding: 1rem;
      border-radius: 4px;

      @media (max-width: 768px) {
        width: 100vw;
      }

      h2 {
        text-align: center;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 768px) {
          flex-direction: column;
        }
        button {
          margin: 1rem 0;
          width: 100%;
          width: 200px;
        }
      }
    }
  }
`

const MainBanner = () => {
  return (
    <BannerWrapper>
      <div className="gradient"></div>

      <div className="contents">
        <Typo type="heading" color="light" className="banner-head">
          Make your trip a Best Memory with us.{" "}
        </Typo>
        <div className="box">
          <Typo type="subHeading" color="dark">
            {" "}
            What are you looking for?
          </Typo>
          <div>
            <Link href="/find/hotels" passHref>
              <a>
                <Button
                  type="outlined"
                  size="medium"
                  text="HOTELS"
                />
              </a>
            </Link>
            <Link href="/find/restaurants" passHref>
              <a>
                {" "}
                <Button
                  type="outlined"
                  size="medium"
                  text="RESTAURANTS"
                />
              </a>
            </Link>

            <Link href="/find/attractions" passHref>
              <a>
                {" "}
                <Button
                  type="outlined"
                  size="medium"
                  text="ATTRACTIONS"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </BannerWrapper>
  )
}

export default MainBanner
