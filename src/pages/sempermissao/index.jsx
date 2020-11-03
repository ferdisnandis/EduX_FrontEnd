import React from 'react';

import Menu from '../../components/menu';
import Rodape from '../../components/rodape';

const SemPermissao = () => {
    return (
        <div>
            <Menu />
                <h1>Sem autorização</h1>
                <p>Infelizmente você não tem acesso a essa página</p>
            <Rodape />
        </div>
    )
}

export default SemPermissao;