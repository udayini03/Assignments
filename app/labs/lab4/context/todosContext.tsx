import { createContext, useContext, useState, type ReactNode } from "react";

export type ContextTodo = { id: string; title: string };

type TodosContextValue = {
  todos: ContextTodo[];
  addTodo: (title: string) => void;
  updateTodo: (todo: ContextTodo) => void;
  deleteTodo: (id: string) => void;
};

const TodosContext = createContext<TodosContextValue | null>(null);

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<ContextTodo[]>([
    { id: "1", title: "Finish the Kambaz A4 screens" },
    { id: "2", title: "Cook spicy miso ramen" },
    { id: "3", title: "Read two chapters of my new thriller" },
    { id: "4", title: "Make a pop playlist for studying" },
  ]);
  const addTodo = (title: string) =>
    setTodos([...todos, { id: crypto.randomUUID(), title }]);
  const updateTodo = (todo: ContextTodo) =>
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  const deleteTodo = (id: string) => setTodos(todos.filter((t) => t.id !== id));
  return (
    <TodosContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodosContext() {
  const value = useContext(TodosContext);
  if (!value) {
    throw new Error("useTodosContext must be used inside TodosProvider");
  }
  return value;
}
