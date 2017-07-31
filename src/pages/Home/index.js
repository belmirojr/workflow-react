import React from 'react'
import NavMenu from '../../components/NavMenu'


import './index.styl' // CSS desta Página vem por último

const Home = () => {
    return (
        <section className="pageHome">
            <h1>Essa é a home do site porra!!!!</h1>
            <NavMenu />
        </section>
    )
}

export default Home