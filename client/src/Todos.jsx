import { useEffect } from "react";
import { getAllTodos } from "./redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo.jsx";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(getAllTodos());
  });
  return (
    <article className="flex items-center justify-center">
      <ul>
        {todos.map((todo) => (
          <Todo key = {todo._id} td={todo} />
        ))}
      </ul>
    </article>
  );
};

export default Todos;
