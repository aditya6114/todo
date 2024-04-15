import React from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import { Provider } from "react-redux";
import Header from "./header";
import Form from "./Form";
import store from "./redux/store";
import Todos from "./Todos";

const App = () => {
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setTodos((currentTodo) => {
  //     return [
  //       ...currentTodo,
  //       { id: crypto.randomUUID(), value: input, completed: false },
  //     ];
  //   });
  //   setInput("");
  // };
  return (
    <div>
      <Header />
      <Form />
      <Todos/>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
