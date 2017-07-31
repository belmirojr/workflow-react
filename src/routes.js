import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Contato, Balanco, NotFound } from './pages'

const Routes = () => {
    return (
        <Switch>
             { /* Toda rota, precisa de um path (caminho) e um componente (ou página) <3 */ }
            <Route path={'/'} component={ Home } exact />
            <Route path={'/contato'} component={ Contato } />
            <Route path={'/balanco'} component={ Balanco } />
            <Route component={ NotFound }/>
        </Switch>
    )
}

export default Routes