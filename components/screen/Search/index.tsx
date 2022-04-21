import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const SearchPage = styled.div`
    min-height: 60vh;
    max-width: 1125px;
    margin: 0 auto;
    padding-top: 2rem;

    h3 {
        color: #888;
        span {
            color: var(--col-brand);
            font-size: 40px;
        }
    }
`

const Search = () => {
    const router = useRouter()

    console.log(router, 'router')
    return (
        <SearchPage>
            <h3> Your searched for <span>{router.query.name}</span></h3>
        </SearchPage>
    )
}

export default Search
