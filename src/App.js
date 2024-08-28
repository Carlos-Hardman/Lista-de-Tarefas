
import React, { useState } from 'react';
import Inputtarefa from './componentes/Inputtarefa';
import Listatarefa from './componentes/listatarefa';
import Graficotarefa from './componentes/graficotarefa';

const App = () => {
  const [tarefas, setTarefas] = useState([]);

  
  const adicionarTarefa = (texto) => {
    if (texto.trim() !== "") {  
      setTarefas([...tarefas, { texto, concluida: false }]);
    }
  };

  const alternarTarefaConcluida = (indice) => {
    const novasTarefas = tarefas.slice();
    novasTarefas[indice].concluida = !novasTarefas[indice].concluida;
    setTarefas(novasTarefas);
  };

  const removerTarefa = (indice) => {
    const novasTarefas = tarefas.filter((_, i) => i !== indice);
    setTarefas(novasTarefas);
  };

  return (
    <div className='App'>
      <h1>Gerenciador de Tarefas</h1>
      <Inputtarefa adicionarTarefa={adicionarTarefa} />
      <Listatarefa
        tarefas={tarefas}
        alternarTarefaConcluida={alternarTarefaConcluida}
        removerTarefa={removerTarefa}
      />
      <Graficotarefa tarefas={tarefas} />
    </div>
  );
};

export default App;
