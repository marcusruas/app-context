import React, { useState, useEffect } from 'react';
import listaTarefasBack from '../backend/dataSource.js';
import TarefasContext from '../context/index';
import Cabecalho from './Cabecalho';
import Tabela from './Tabela';

import './index.scss';

const App = () => {
    const [listaTarefas, adicionarTarefa] = useState([]);
    const adicionarItem = (descricao, prioridade) => {
        const tarefaNova = { descricao, prioridade };
        adicionarTarefa([
            ...listaTarefas,
            tarefaNova
        ]);
    }

    useEffect(() => {
        adicionarTarefa(listaTarefasBack);
    }, []);

    const valores = {
        tarefas: listaTarefas,
        adicionarItem,
    };

    return (
        <TarefasContext.Provider value={valores}>
            <TarefasContext.Consumer>
                {
                    () => (
                        <div className="appContainer">
                            <Cabecalho />
                            <div style={{ height: '20%' }} />
                            <Tabela />
                        </div>
                    )
                }
            </TarefasContext.Consumer>
        </TarefasContext.Provider>
    );
}

export default App;