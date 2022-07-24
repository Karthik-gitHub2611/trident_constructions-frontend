import React from "react";
import styles from "./styles.module.scss"

type Tprops = {

}

const HomePage: React.FC<Tprops> = () => {
    return (
        <div className={styles.homePage}>
            Welcome to Trident Constructions
        </div>
    )
}
export default HomePage;