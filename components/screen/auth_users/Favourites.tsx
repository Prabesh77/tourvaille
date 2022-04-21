import {useState, useEffect} from 'react'
import { useSession, getSession } from "next-auth/react"
import styled from 'styled-components'
import AdventureCard from '../../common/ui/cards/AdventureCard'
import Link from 'next/link'

const FavouriteWrapper = styled.div`
    height: 200px;
    width: 100%;
    background: orange;
`

const FavouritesWrapper = styled.div`
    max-width: 1200px;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem 0;
    justify-items: center;

`

const ErrorDiv = styled.div`
    min-height: 60vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-size: 20px;
        font-weight: 500;
    }
    a {
        color: var(--col-blue);
        font-weight: bold;
        font-size: 12px;
        margin-top: 1.5rem;
    }

`

const Favourites = () => {
    const { data: session, status } = useSession()
    const [favs, setFavs] = useState<any>()
    const [refresh, setRefresh] = useState(false)

    const fetchFavs = async () => {
        const resFavourites = await fetch(
          "http://localhost:3000/api/travel/getFavourites"
        )
        const favData = await resFavourites.json()
    //    console.log(favData, 'favdata')
        setFavs(favData)
      }

    useEffect(() => {
      fetchFavs()
     
    }, [refresh])

    console.log(favs)

    if( favs && favs[0]?.user !== session?.user?.email) {
        return(
            <ErrorDiv>
            <p>Your favorite list is empty!</p>
            <Link href="/" passHref><a>Add some?</a></Link>
            </ErrorDiv>
        )
    }
    return (
        <FavouritesWrapper>
           {favs?.filter(d => d.user == session?.user?.email)?.map(data => <AdventureCard key={data?._id} place={data} type={data?.type} refresh={setRefresh}/>)}
        </FavouritesWrapper>
    )
}

export default Favourites
