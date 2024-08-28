
import React from 'react';

const Listatarefa = ({ tarefas = [], alternarTarefaConcluida, removerTarefa }) => {
  if (!Array.isArray(tarefas)) {
    console.error('Propriedade tarefas deve ser um array');
    return null;
  }

  return (
    <ul>
      {tarefas.map((tarefa, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={tarefa.concluida}
            onChange={() => alternarTarefaConcluida(index)}
          />
          {tarefa.texto}
          <button className='Botaoremover' onClick={() => removerTarefa(index)}>Remover</button>
        </li>
      ))}
    </ul>
  );
};

export default Listatarefa;
