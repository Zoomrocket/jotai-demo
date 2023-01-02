import produce from 'immer';
import { useAtom } from 'jotai';
import { useState } from 'react';
import './App.css';
import todoAtom, { insertTodoAtom } from './todoAtom';
import userAtom, { loginAtom } from './userAtom';


function App() {

  const [todos] = useAtom(todoAtom);
  const [user] = useAtom(userAtom);
  const [, login] = useAtom(loginAtom);

  const [, insertTodo] = useAtom(insertTodoAtom);

  const [text, setText] = useState("");

  const handleClick = async () => {
    await insertTodo(text)
    setText("");
  }

  return (
    <div className="App">

      <p>Email: {user.email}</p>
      <p>Name: {user.name}</p>
      <button onClick={login}>Login</button>

      <p>------------------------------------------------</p>

      <h1>Todos</h1>
      <input placeholder="Enter Todo" onChange={(e) => setText(e.target.value)} value={text} />
      <button onClick={handleClick}>Add Todo</button>
      <ul>
        {
          todos.map((todo, index) => {
            return <li key={index}>{todo}</li>
          })
        }
      </ul>
      <p>{todos.length < 1 ? "No todos" : null}</p>
    </div>
  );
}

export default App;
