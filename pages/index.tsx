import type { NextPage } from 'next'
import Footers from '../components/Footers'
import Header from '../components/Headers'
import TitleBar from '../components/Title'
import HomePage from '../containers/homePage'
import { ITitleBar } from '../interface/common.interface'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const metaTags: ITitleBar = {
    name: "Trident Constructions",
    content: "The construction company for your enterprise"
  }

  return (
    <div className={styles.container}>
      <TitleBar
        title='Trident Constructions'
        metaDescription={metaTags}
      />
      <Header />
      <HomePage />
      <Footers />
    </div>
  )
}

export default Home
