import React from 'react'
import Menu from '../../components/menu'
import Rodape from '../../components/rodape'

const NaoEncontrado = () => {
    return (
    <div>
        <Menu />
            <h1 className= 'text-center' >404</h1>
            <p className= 'text-center'>Infelizmente a página solicitada não foi encontrada.</p>
            <p className= 'text-center'>Verifique se ela existe ou se você digitou corretamente</p>
        <Rodape />
    </div>
    )
}

export default NaoEncontrado;