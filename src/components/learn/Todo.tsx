import React, { useState, useReducer } from "react";
import "../../style/todolist.css";
import type { TodoModel } from "../../model/todo.model";

const ACTIONS = {
  ADD_TODO: "add-todo",
  REMOVE_TODO: "remove-todo",
  MOVE_UP: "move-up",
  MOVE_DOWN: "move-down",
  SET_TODOS: "set-todos",
};

const ToDoList = () => {
  const [todos, dispatch] = useReducer((state: TodoModel[], action) => {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...state, newTodo(action.payload)];
      case ACTIONS.REMOVE_TODO:
        return state.filter((_, index) => index !== action.payload);
      case ACTIONS.SET_TODOS:
        return action.payload;
      default:
        return state;
    }
  }, []);
  const [newtask, setNewTask] = useState("");

  function newTodo(itemName: string): TodoModel {
    return { Id: Date.now().toString(), itemName, isCompleted: false };
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function deleteTask(index: number): void {
    dispatch({ type: ACTIONS.REMOVE_TODO, payload: index });
  }

  function moveTaskUp(index: number): void {
    if (index === 0) return; // Can't move the first task up
    const updatedTodos = [...todos];
    [updatedTodos[index], updatedTodos[index - 1]] = [
      updatedTodos[index - 1],
      updatedTodos[index],
    ];
    dispatch({ type: ACTIONS.SET_TODOS, payload: updatedTodos });
  }

  function moveTaskDown(index: number): void {
    if (index === todos.length - 1) return; // Can't move the last task down
    const updatedTodos = [...todos];
    [updatedTodos[index], updatedTodos[index + 1]] = [
      updatedTodos[index + 1],
      updatedTodos[index],
    ];
    dispatch({ type: ACTIONS.SET_TODOS, payload: updatedTodos });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!newtask) return;
    dispatch({ type: ACTIONS.ADD_TODO, payload: newtask });
    setNewTask("");
  }

  function toggleTaskCompletion(index: number): void {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    dispatch({ type: ACTIONS.SET_TODOS, payload: updatedTodos });
  }

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add a new task..."
            value={newtask}
            onChange={handleInputChange}
          />
        </form>
      </div>
      <ol>
        {todos.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleTaskCompletion(index)}
            />
            <span className="text">
              <span
                className="text"
                style={
                  task.isCompleted ? { textDecoration: "line-through" } : {}
                }
              >
                {task.itemName}
              </span>
            </span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              ☝
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
