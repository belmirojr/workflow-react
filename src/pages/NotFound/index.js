import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            Nada encontrado :(
            <Link to="/">Voltar para a home!</Link>
        </div>
    )
}

export default NotFound