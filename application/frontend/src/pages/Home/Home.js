import React from 'react'
import HeroContainer from '../../components/Hero/HeroContainer.js'
import SiteDemo1 from '../../components/SiteDemo1/SiteDemo1.js'
import SiteDemo2 from '../../components/SiteDemo2/SiteDemo2'
import Footer from '../../components/Footer/Footer.js'

import styles from "./Home.module.css"

function Home() {
    return (
        <div>
            <HeroContainer/>
            <SiteDemo1/>
            <SiteDemo2/>
            <Footer/>
        </div>
    )
}

export default Home;