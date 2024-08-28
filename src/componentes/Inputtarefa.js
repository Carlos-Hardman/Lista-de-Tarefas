
import React, { useState } from 'react';
import '../App.css'; 

const Inputtarefa = ({ adicionarTarefa }) => {
  const [texto, setTexto] = useState('');

  const handleInputChange = (event) => {
    setTexto(event.target.value);
  };

  const handleAddClick = () => {
    if (adicionarTarefa) {  
      adicionarTarefa(texto);
      setTexto(''); 
    } else {
      console.error('A função adicionarTarefa não foi passada.');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={handleInputChange}
        placeholder="Digite uma nova tarefa"
      />
      <button className="Botaoadicionar" onClick={handleAddClick}>Adicionar Tarefa</button>
    </div>
  );
};

export default Inputtarefa;
