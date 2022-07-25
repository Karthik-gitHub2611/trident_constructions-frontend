import React from "react"
import styles from "./styles.module.scss"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import Logo from "../../assests/images/logo.png"
import { useRouter } from 'next/router'
import Image from "next/image";
import { MENUS } from "../../common/constants";

type Tprops = {

}


const Header: React.FC<Tprops> = () => {

    const router = useRouter()
    const currentUrl = router.pathname


    return (
        <div className={styles.headers}>
            <div className={styles.band}>
                <div className={styles.mobileNo}>
                    <PhoneIcon />
                    <p>+91-8056158200</p>
                </div>
                <div className={styles.email}>
                    <EmailIcon />
                    <p>shyamalaassociates@yahoo.com</p>
                </div>
                <div className={styles.socialMedia}>
                    <FacebookIcon />
                    <WhatsAppIcon />
                    <GoogleIcon />
                    <InstagramIcon />
                </div>
            </div>
            <div className={styles.headerMenus}>
                <div className={styles.logo}>
                    <Image src={Logo} alt="" />
                </div>
                {MENUS?.map((menu, index: number) => <li key={index}><a onClick={() => router.push(`${menu.path}`)} className={menu.path === currentUrl ? styles.active : styles.inActive}>{menu.label}</a></li>)}
            </div>
        </div>
    )
}

export default Header;