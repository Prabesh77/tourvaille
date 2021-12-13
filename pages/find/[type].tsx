import Script from 'next/script'
import Head from 'next/head'
import PageHead from '../../components/common/other/Head'
import MapSearch from '../../components/screen/Map/MapSearch'
import NomapSearch from '../../components/screen/Map/NomapSearch'
import { useRouter } from 'next/router'

const Map = () => {
    const router = useRouter()
    const currentType = router?.query?.type
    return (
        <>
        <PageHead title="Title" name="name" content="content"/>
        <div>
            <MapSearch currentType={currentType}/>
            {/* <NomapSearch currentType={currentType}/> */}
        </div>
        </>
    )
}

export default Map
