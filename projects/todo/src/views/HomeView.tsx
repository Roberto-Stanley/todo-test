import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import { ITodoItem } from "../types/TodoType";
import { useTodos } from "../hooks/useTodos";
import TodoFilter from "../components/TodoFilter";
import TodoForm from "../components/TodoForm";

export default function HomeView() {
  const { todos, updateTodo, deleteTodo } = useTodos();
  const [availableTodos, setAvailableTodos] = useState<ITodoItem[]>([]);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    setAvailableTodos(
      todos.filter((item) => {
        if (filter === "all") return true;
        else if (filter === "completed") return item.completed;
        else return !item.completed;
      })
    );
  }, [filter, todos]);

  return (
    <Container>
      <TodoForm />

      <h3 className="text-center title" style={{ marginBottom: "2rem" }}>
        TODO list
      </h3>
      <TodoFilter
        filterValue={filter}
        onFilterChange={(value) => {
          setFilter(value);
        }}
      />
      <TodoList>
        {availableTodos.length > 0 ? (
          <>
            {availableTodos.map((item, index) => {
              return (
                <TodoItem
                  item={item}
                  key={index}
                  onToggle={(item: ITodoItem) => {
                    updateTodo(index, item);
                  }}
                  onDelete={() => {
                    deleteTodo(index);
                  }}
                />
              );
            })}
          </>
        ) : (
          <div>There are not available todos</div>
        )}
      </TodoList>
    </Container>
  );
}
