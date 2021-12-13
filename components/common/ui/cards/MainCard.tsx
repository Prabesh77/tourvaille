import Image from "next/image"
import styled from "styled-components"
import Link from "next/link"

const CardWrapper = styled.section`
  min-height: 309px;
  width: 230px;
  /* min-width: 250px; */
  border-radius: 4px 4px 0 0;
  overflow: hidden;


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

const MainCard = ({ place }: Props) => {
  const { name, location, price, image } = place
  return (
    <CardWrapper>
      <Link href="/type/place">
        <a>
          <div className="image">
            <Image
              src={image}
              alt=""
              height="250"
              width="244"
              objectFit="cover"
            />
          </div>
          <div className="detail">
            <div className="left">
              <p>{name}</p>
              <span>{location}</span>
            </div>
            <div className="right">
              <p>Rs. {price}</p>
            </div>
          </div>
        </a>
      </Link>
    </CardWrapper>
  )
}

export default MainCard
