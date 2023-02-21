import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { todoName: todo }]);
    setTodo("");
  };

  const deleteTodo = (deleteValue) => {
    const restTodoList = [
      ...todoList.filter((val) => {
        return val.todoName !== deleteValue;
      }),
    ];
    setTodoList(restTodoList);
  };

  return (
    <div className="bg-[#040A2E] w-full h-screen flex items-center">
      <div className="w-[500px] mx-auto h-[500px] text-center bg-[#040A2E] border border-white p-5 rounded-lg">
        <h1 className="text-5xl font-bold mb-8 text-white text-center hover:text-red-300 cursor-pointer">✔️Todoist</h1>
        <form onSubmit={handleForm}>
          <input
            className="border-2 placeholder:text-gray-500 rounded-lg border-black w-full p-5 mb-5 text-black"
            type="text"
            placeholder="Add Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-500 text-white py-3 px-8 rounded-lg mb-8"
          >
            Add Todo
          </button>
        </form>
        <div className="todo-show-area ">
          <ul>
            {todoList.map((singleTodo, index) => {
              return (
                <li
                  key={index}
                  className="bg-black mb-5 flex justify-between hover:bg-[#21319D] hover:cursor-pointer  text-white py-5 rounded-lg text-2xl px-5"
                >
                  {singleTodo.todoName}{" "}
                  <span
                    onClick={() => deleteTodo(singleTodo.todoName)}
                    className="text-red-600  cursor-pointer"
                  >
                    x
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;