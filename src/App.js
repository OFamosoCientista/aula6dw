import logo from './logo.svg';
import './App.css';

import { useState } from "react";

function App() {

  const [section, setSection] = useState("todo");
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState("");
  const [cep, setCep] = useState("");
  const [resultado, setResultado] = useState("");

  function addTask() {
    setTasks([...tasks, input]);
    setInput("");
  }

  async function buscarCEP() {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();
    setResultado(`${data.logradouro}, ${data.bairro} - ${data.localidade}`);
  }

  return (
    <div>

      <header>
        <h1>Projeto Multi Ferramentas</h1>
        <nav>
          <button onClick={() => setSection("todo")}>To-Do</button>
          <button onClick={() => setSection("contador")}>Contador</button>
          <button onClick={() => setSection("calc")}>Calculadora</button>
          <button onClick={() => setSection("cep")}>CEP</button>
        </nav>
      </header>

      {section === "todo" && (
        <section>
          <h2>To-Do List</h2>
          <input value={input} onChange={e => setInput(e.target.value)} />
          <button onClick={addTask}>Adicionar</button>
          <ul>
            {tasks.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </section>
      )}

      {section === "contador" && (
        <section>
          <h2>Contador</h2>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>Clique</button>
        </section>
      )}

      {section === "calc" && (
        <section>
          <h2>Calculadora</h2>
          <input value={display} readOnly />
          <br />
          <button onClick={() => setDisplay(display + "1")}>1</button>
          <button onClick={() => setDisplay(display + "2")}>2</button>
          <button onClick={() => setDisplay(display + "3")}>3</button>
          <button onClick={() => setDisplay(display + "+")}>+</button>
          <br />
          <button onClick={() => setDisplay("")}>C</button>
          <button onClick={() => setDisplay(eval(display))}>=</button>
        </section>
      )}

      {section === "cep" && (
        <section>
          <h2>Buscador de CEP</h2>
          <input value={cep} onChange={e => setCep(e.target.value)} />
          <button onClick={buscarCEP}>Buscar</button>
          <p>{resultado}</p>
        </section>
      )}

    </div>
  );
}

export default App;

export default App;