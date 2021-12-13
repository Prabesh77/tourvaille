import Head from 'next/head'

const PageHead = ({title, name, content}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name={name} content={content} />
            <link rel="icon" href="/icons/Icon.ico" />
            <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDCE0RsOcv9pm1E_c1NfBR23CK5YxFPIEE"></script>
        </Head>
    )
}

export default PageHead
