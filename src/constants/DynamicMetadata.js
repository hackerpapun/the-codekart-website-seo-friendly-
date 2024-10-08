import React from 'react'
import Head from 'next/head'

const DynamicMetadata = ({ children, title, description }) => {
    return (
        <>
        <Head>
            <title>{title || "CodeKart"}</title>
            <meta name="description" content={description || "Learn more about Codekart Solutions."} />
        </Head>

        {children}
        </>
    )
}

export default React.memo(DynamicMetadata)