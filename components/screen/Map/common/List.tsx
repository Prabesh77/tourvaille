import { useState, useEffect, createRef } from "react"

import styled from "styled-components"
import Loader from "../../../common/other/Loader"
import Card from "./MapCard"

const ListHolder = styled.div`
  height: calc(100vh - 50px);
  background: #fff;
  overflow-y: scroll;
  width: 400px;
  padding: 1rem;
  ::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--col-brand);
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
  .loader {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      margin-top: 3rem;
    }
  h2 {
    /* padding: 1rem 0 0 1rem; */
  }
  form {
    /* padding: 1rem; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
    .form-group {
      display: flex;
      flex-direction: column;
      label {
        font-size: 13px;
        font-weight: 600;
        color: var(--col-brand);
        margin-bottom: 3px;
      }
      select {
        height: 30px;
        padding-left: 10px;
      }
    }
  }
`

const List = ({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}) => {
  const [elRefs, setElRefs] = useState([])
  useEffect(() => {
    const refs = Array(places?.length)
      // @ts-ignore
      .fill()
      .map((_, i) => elRefs[i] || createRef())
    setElRefs(refs)
  }, [places])

  return (
    <ListHolder>
      <h2>Hotels, Restaurants and Attractions near YOU</h2>
      {isLoading ? (
        <div className="loader">
          <Loader/>
        </div>
      ) : (
        <>
          <form className="filter-form">
            <div className="form-group">
              <label>Type</label>
              <select value={type} onChange={(e) => setType(e.target.value)}>
                <option>Select</option>
                <option value="restaurants">Restaurants</option>
                <option value="hotels">Hotels</option>
                <option value="attractions">Attractions</option>
              </select>
            </div>

            <div className="form-group">
              <label>Rating</label>
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value={0}>All</option>
                <option value={3}>Above 3</option>
                <option value={4}>Above 4</option>
                <option value={4.5}>Above 4.5</option>
              </select>
            </div>
          </form>
          <div className="list">
            {places?.map(
              (place, i) =>
                place?.name && (
                  <div ref={elRefs[i]} key={i}>
                    <Card
                      place={place}
                      selected={Number(childClicked) === i}
                      refProp={elRefs[i]}
                    />
                  </div>
                )
            )}
          </div>
        </>
      )}
    </ListHolder>
  )
}

export default List
