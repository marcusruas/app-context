import React, { useContext } from 'react';
import { Table, Button } from 'antd';
import TarefasContext from '../context/index';

const Tabela = () => {
    const { tarefas, removerItem } = useContext(TarefasContext);
    const colunas = [
        {
            title: 'Descrição',
            dataIndex: 'descricao',
            key: 'descricao',
        },
        {
            title: 'Prioridade',
            dataIndex: 'prioridade',
            key: 'prioridade',
        },
        {
            title: 'Remover',
            render: (text, registro) => <Button onClick={() => removerItem(registro.descricao)}>Remover</Button>
        },
    ]

    return (
        <Table className="appContainer__tabela" columns={colunas} dataSource={tarefas} />
    );
}

export default Tabela;