import React from "react"
import styles from "./styles.module.scss"
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import { MENUS } from "../../common/constants";
import { useRouter } from "next/router";

type Tprops = {

}

const Footers: React.FC<Tprops> = () => {

    const router = useRouter()
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.address}>
                    <h2>
                        Contact Us
                    </h2>
                    <p>No: 11, 8th Avenue, Ashok Nagar, Chennai - 600083.</p>
                </div>
                <div className={styles.footerMenus}>
                    <h2>
                        Company
                    </h2>
                    {MENUS.filter((data)=>data.label!=="Home").map((menu, index: number) => <a key={index} onClick={() => router.push(`${menu.path}`)}><TrendingFlatIcon />{menu.label}</a>)}
                </div>
                <div className={styles.footerMenus}>
                    <h2>
                        Our Services
                    </h2>
                    <a><TrendingFlatIcon />Constructions</a>
                    <a><TrendingFlatIcon />Structural Designs</a>
                    <a><TrendingFlatIcon />Interior Design</a>
                    <a><TrendingFlatIcon />Real Estate</a>
                    <a><TrendingFlatIcon />Architectural Services</a>
                </div>

                <div className={styles.footerMenus}>
                    <h2>
                        Contact Us
                    </h2>
                    <a><PlaceIcon />No 11, 8th Avenue, Ashok Nagar,
                        Chennai - 600083.</a>
                    <a><PhoneAndroidIcon />+91-98410 97110, 99413 56080</a>
                    <a><CallIcon />044-23660284</a>
                    <a><AttachEmailIcon />shyamalaassociates@yahoo.com</a>
                    <a></a>
                </div>
            </div>
        </div>
    )
}

export default Footers;