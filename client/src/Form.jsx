import { useState } from "react";
import { addNewTodo } from "./redux/actions";
import { useDispatch } from "react-redux";


const Form = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewTodo(input));
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center ">
        <label htmlFor="new item">
          <input
            className="w-6/6 border-b border-solid border-black outline-none"
            placeholder="Enter the To Do... "
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="flex items-center justify-center">
        <button>Add</button>
      </div>
    </form>
  );
};

export default Form;
