import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function TodoApp() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    let newItem = {
      id: todoList.length + 1,
      task: newTodo,
      completed: false,
    };
    setTodoList([...todoList, newItem]);
  };

  const handleComplete = (id) => {
    setTodoList(
      todoList.map((todo) => {
        return todo.id === Number(id)
          ? { ...todo, completed: !todo.completed }
          : { ...todo };
      })
    );
  };

  const handleDelete = (id) => {
    setTodoList([...todoList].filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1 className="p-7 text-center font-base text-4xl">To-Do List with <span className="font-bold text-sky-500">useState</span></h1>
      <TodoForm addTodo={addTodo} />
      <div>
        <ul className="m-5">
          {todoList.map((todo, index) => (
            <TodoItem
              key={`todo-${index}`}
              todo={todo}
              onComplete={handleComplete}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;