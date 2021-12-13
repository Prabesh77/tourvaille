



import { useState, useEffect, useRef } from 'react'
import MainCard from './MainCard'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import styled from 'styled-components'

const places = [
    {
      id: 1,
      name: "Bhaktapur Durbar Square",
      location: "Bhaktapur",
      price: 1200,
      image:
        "https://images.pexels.com/photos/4028816/pexels-photo-4028816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 2,
      name: "Patan Durbar Square",
      location: "Patan",
      price: 1100,
      image:
        "https://images.pexels.com/photos/4028822/pexels-photo-4028822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 3,
      name: "Basantpur Durbar Square",
      location: "Basantpur",
      price: 900,
      image:
        "https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        id: 4,
        name: "Basantpur Durbar Square",
        location: "Basantpur",
        price: 900,
        image:
          "https://images.pexels.com/photos/4028816/pexels-photo-4028816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        id: 5,
        name: "Basantpur Durbar Square",
        location: "Basantpur",
        price: 900,
        image:
          "https://images.pexels.com/photos/4028822/pexels-photo-4028822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        id: 6,
        name: "Basantpur Durbar Square",
        location: "Basantpur",
        price: 900,
        image:
          "https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        id: 7,
        name: "Basantpur Durbar Square",
        location: "Basantpur",
        price: 900,
        image:
          "https://images.pexels.com/photos/4028822/pexels-photo-4028822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        id: 8,
        name: "Basantpur Durbar Square",
        location: "Basantpur",
        price: 900,
        image:
          "https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        id: 9,
        name: "Basantpur Durbar Square",
        location: "Basantpur",
        price: 900,
        image:
          "https://images.pexels.com/photos/4028822/pexels-photo-4028822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        id: 10,
        name: "Basantpur Durbar Square",
        location: "Basantpur",
        price: 900,
        image:
          "https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
  ]

const SliderWrapper = styled.div`
    position: relative;
    max-width: 1120px;
    margin: 1rem auto;
    .cards {
        width: 100%;
        display: flex;
        overflow-x: scroll;
        scroll-behavior: smooth;
        scrollbar-highlight-color: transparent;

        ::-webkit-scrollbar {
            width: 0;  /* Remove scrollbar space */
            background: transparent;  /* Optional: just make scrollbar invisible */
        }
        section {
            margin-right: 3.2rem;
            min-width: 244px;
        }
        section:last-child {
            margin-right: 0 !important;
        }
    }

    button {
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
        transform: translateY(-50%);

        &:hover {
            background: #ccc;
        }
    }

    .left-btn {
        position: absolute;
        left: 0;
    }
    .right-btn {
        position: absolute;
        right: 0;
    }
    
`

const CardSlider = () => {
    const [currentWidth, setCurrentWidth] = useState()
    const ref = useRef(null)
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };

    useEffect(() => {
      setCurrentWidth(ref?.current?.offsetWidth)
    }, [])
    return (
        <SliderWrapper>
            <div className="cards" ref={ref}>
                {places?.map(place => <MainCard key={place.id} place={place}/>)}
            </div>
            <button className="right-btn" onClick={() => scroll(currentWidth)}><MdKeyboardArrowRight /></button>
            <button className="left-btn" onClick={() => scroll(-Number(currentWidth))}><MdKeyboardArrowLeft /></button>
        </SliderWrapper>
    )
}

export default CardSlider

