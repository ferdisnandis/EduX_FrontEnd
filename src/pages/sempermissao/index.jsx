import React from 'react';

import Menu from '../../components/menu';
import Rodape from '../../components/rodape';

const SemPermissao = () => {
    return (
        <div>
            <Menu />
                <h1 className='text-center'>Sem autorização</h1>
                <p className='text-center'>Infelizmente você não tem acesso a essa página</p>
            <Rodape />
        </div>
    )
}

export default SemPermissao;