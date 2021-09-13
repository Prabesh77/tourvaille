import Image from 'next/image'
import styled from 'styled-components'

const CardWrapper = styled.div`
    min-height: 309px;
    width: 244px;
    border-radius: 4px 4px 0 0;
    overflow: hidden;

    .detail {
        display: flex;
        justify-content: space-between;
        padding: 6px 0;
        .left {
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
            width: 100px;
            text-align: right;
            p {
                font-size: 15px;
            }
        }
    }
`

const MainCard = ({place}) => {
    const { name, location, price, image} = place
    return (
        <CardWrapper>
          <div><Image src={image} height="250" width="244" objectFit="cover" /></div>  
          <div className="detail">
              <div className="left">
                  <p>{name}</p>
                  <span>{location}</span>
              </div>
              <div className="right">
                  <p>Rs. {price}</p>
              </div>
          </div>
        </CardWrapper>
    )
}

export default MainCard
