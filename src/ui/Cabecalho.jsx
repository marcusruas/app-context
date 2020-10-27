import { Input, Button } from 'antd';

const Cabecalho = () => {
    return (
        <div className="appContainer__cabecalho">
            <div className="appContainer__cabecalho__titulo">Lista de tarefas</div>
            <div className="appContainer__cabecalho__novaTarefa">
                <div className="appContainer__cabecalho__novaTarefa__conteudo">
                    <div><Input placeholder="Digite o nome da tarefa" /></div>
                    <div><Button>Adicionar</Button></div>
                </div>
            </div>
        </div>
    );
}

export default Cabecalho;