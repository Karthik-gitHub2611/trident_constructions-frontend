import { NextPage } from "next";
import React from "react";
import Footers from "../../components/Footers";
import Header from "../../components/Headers";
import TitleBar from "../../components/Title";
import { ITitleBar } from "../../interface/common.interface";
import styles from '../../styles/Home.module.css'

const Services: NextPage = () => {

    const metaTags: ITitleBar = {
        name: "Trident Constructions",
        content: "The construction company for your enterprise"
    }

    return (
        <div className={styles.container}>
            <TitleBar
                title='Trident Constructions - Services'
                metaDescription={metaTags}
            />
            <Header />
            <div className={styles.main}>
                Services
            </div>
            <Footers />
        </div>
    )
}

export default Services;