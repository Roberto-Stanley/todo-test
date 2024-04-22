import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
export function useTodos() {
  return useContext(TodoContext);
}
