 

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todos, setTodos] = useState([{ task: "sample Task", id: uuidv4() }]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    if (newTodo.trim() === "") return; // avoid empty tasks

    setTodos((prevTodos) => [
      ...prevTodos,
      { task: newTodo, id: uuidv4() }
    ]);
    setNewTodo(""); // clear input
  };

  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const upprCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase(),
      }))
    );
  };

  const upprCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, task: todo.task.toUpperCase() } : todo
      )
    );
  };

  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br /><br />
      <hr />
      <h4>Todo List</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            &nbsp; &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => upprCaseOne(todo.id)}>UpperCase One</button>
          </li>
        ))}
      </ul>
      <button onClick={upprCaseAll}>UpperCase All</button>
    </div>
  );
}
