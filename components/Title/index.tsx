import Head from "next/head";
import React from "react";
import { ITitleBar } from "../../interface/common.interface";

type Tprops = {
    title: string
    metaDescription: ITitleBar
}

const TitleBar: React.FC<Tprops> = ({ title, metaDescription }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name={metaDescription?.name} content={metaDescription?.content} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default TitleBar;