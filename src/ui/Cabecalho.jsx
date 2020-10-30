import { Input, Button } from 'antd';
import { useContext, useState } from 'react';
import TarefasContext from '../context/index';

const Cabecalho = () => {
    const { adicionarItem } = useContext(TarefasContext);
    const [tarefa, alterarTarefa] = useState("");

    return (
        <div className="appContainer__cabecalho">
            <div className="appContainer__cabecalho__titulo">Lista de tarefas</div>
            <div className="appContainer__cabecalho__novaTarefa">
                <div className="appContainer__cabecalho__novaTarefa__conteudo">
                    <div><Input onChange={e => alterarTarefa(e.target.value)} placeholder="Digite o nome da tarefa" /></div>
                    <div><Button onClick={() => adicionarItem(tarefa)}>Adicionar</Button></div>
                </div>
            </div>
        </div>
    );
}

export default Cabecalho;