import { useEffect, useState, createContext } from "react";
import { ITodoItem } from "../types/TodoType";

export const TodoContext = createContext<{
  todos: ITodoItem[];
  updateTodo: Function;
  addTodo: Function;
  deleteTodo: Function;
}>({
  todos: [],
  updateTodo: () => {},
  addTodo: () => {},
  deleteTodo: () => {},
});

export function TodosProvider({ children }) {
  const values = localStorage.getItem("todos-list");
  const [todos, setTodos] = useState<ITodoItem[]>(
    values ? JSON.parse(values) : []
  );

  useEffect(() => {
    persistenceTodos();
  }, [todos]);

  function updateTodo(index: number, todoItem: ITodoItem) {
    setTodos(
      todos.map((todo, todoIndex) => {
        if (index === todoIndex)
          return {
            ...todo,
            ...todoItem,
          };
        return todo;
      })
    );
  }

  function deleteTodo(index: number) {
    setTodos(todos.filter((__, todoIndex) => todoIndex !== index));
  }

  function persistenceTodos() {
    localStorage.setItem("todos-list", JSON.stringify(todos));
  }

  function addTodo(todoItem: ITodoItem) {
    setTodos(todos.concat([todoItem]));
  }

  const valueContext = {
    todos,
    updateTodo,
    addTodo,
    deleteTodo,
  };

  return (
    <TodoContext.Provider value={valueContext}>{children}</TodoContext.Provider>
  );
}
