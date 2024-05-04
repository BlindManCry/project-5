import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

function TodoContextProvider({ children }) {
  const [status, setStatus] = useState("all");
  return (
    <TodoContext.Provider value={{ status, setStatus }}>
      {children}
    </TodoContext.Provider>
  );
}

function useTodo() {
  const context = useContext(TodoContext);
  if (!context) throw new Error("Context was used outside the box");
  return context;
}

export { TodoContextProvider, useTodo };
