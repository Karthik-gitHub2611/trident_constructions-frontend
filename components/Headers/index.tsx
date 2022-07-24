import React from "react"
import styles from "./styles.module.scss"

type Tprops = {

}

const Header: React.FC<Tprops> = () => {
    return (
        <div className={styles.headers}>
            Headers
        </div>
    )
}

export default Header;