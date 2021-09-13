import Head from 'next/head'

const PageHead = ({title, name, content}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name={name} content={content} />
            <link rel="icon" href="/icons/Icon.ico" />
        </Head>
    )
}

export default PageHead
