import React from "react"
import styles from "./styles.module.scss"

type Tprops = {

}

const Footers: React.FC<Tprops> = () => {
    return (
        <div className={styles.footer}>
            Footer
        </div>
    )
}

export default Footers;