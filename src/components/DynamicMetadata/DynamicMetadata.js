import React from 'react'
import Head from 'next/head'

const DynamicMetadata = ({ children, title, description }) => {
    return (
        <>
        <Head>
            <title>About Us - Codekart</title>
            <meta name="description" content="Learn more about Codekart Solutions." />
        </Head>

        {children}
        </>
    )
}

export default React.memo(DynamicMetadata)