import React from "react";

const TarefasContext = React.createContext({
    tarefas: [],
    adicionarItem: (descricao, prioridade) => { },
    removerItem: (descricao) => { },
});

export default TarefasContext;