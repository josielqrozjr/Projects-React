import './App.css';

import {useState, useEffect} from 'react'
import {BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from 'react-icons/bs'

const API = "http://localhost:5000";

function App() {

  const [title, setTitle] = useState(""); // estados para alterações das estruturas
  const [time, setTime] = useState("");
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => { // Não vai quebrar o fluxo/sessão da página
    e.preventDefault(); // ao enviar o formulário, chama-se fluxo SPA
    setTitle(""); // Após o envio ele limpa o formulário
  };

  return (
    <div className="App">
      <div className="todo-header">
        <h1>TODO ZORQ</h1>
      </div>
      <div className="form-todo">
        <h2>insira sua próxima tarefa:</h2>
        <form onSubmit={handleSubmit}> {/* Chamada da função do evento */}
          <div className="form-control">
            <label htmlFor="title">O que você vai fazer?</label>
            <input 
            type="text"
            name="title"
            placeholder="Título da tarefa"
            onChange={(e) => setTitle(e.target.value)}
            value={title || ""}
            required
            />
          </div>
          <div className="form-control">
            <label htmlFor="time">O que você vai fazer?</label>
            <input 
            type="text"
            name="time"
            placeholder="Tempo estimado (horas)"
            onChange={(e) => setTime(e.target.value)}
            value={time || ""}
            required
            />
          </div>
          <input type="submit" value="Criar tarefa" />
        </form>
      </div>
      <div className="list-todo">
        <h2>lista de tarefas:</h2>
        {tasks.length === 0 && <p>não há tarefas!</p>}
      </div>
    </div>
  );
}

export default App;
