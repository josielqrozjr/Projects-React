import './App.css';

import {useState, useEffect} from 'react'
import {BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from 'react-icons/bs'

const API = "http://localhost:5000";

function App() {

  const [title, setTitle] = useState(""); // estados para alterações das estruturas
  const [time, setTime] = useState("");
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <div className="todo-header">
        <h1>TODO ZORQ</h1>
      </div>
      <div className="form-todo">
        <p>Formulário</p>
      </div>
      <div className="list-todo">
        <p>Lista</p>
      </div>
    </div>
  );
}

export default App;
