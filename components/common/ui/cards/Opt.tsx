import { useRef } from 'react'
import MainCard from './MainCard'

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

    .cards {
        width: 100%;
        display: flex;
        overflow-x: scroll;
        scroll-behavior: smooth;
        div {
            margin-right: 1rem;
        }
        div:last-child {
            margin-right: 0;
        }
    }
    
`

const Opt = () => {
    const ref = useRef(null)
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };
    return (
        <SliderWrapper>
            <div className="cards" ref={ref}>
                {places?.map(place => <MainCard key={place.id} place={place}/>)}
            </div>
            <button onClick={() => scroll(1130)}>Scroll</button>
            <button onClick={() => scroll(-1130)}>Scroll back</button>
        </SliderWrapper>
    )
}

export default Opt
