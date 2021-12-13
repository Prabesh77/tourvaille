import Script from 'next/script'
import Head from 'next/head'
import PageHead from '../components/common/other/Head'
import MapSearch from '../components/screen/Map/MapSearch'

const Map = () => {
    return (
        <>
           <PageHead title="Title" name="name" content="content"/>
        <div>
            <MapSearch />
        </div>
        </>
    )
}

export default Map
