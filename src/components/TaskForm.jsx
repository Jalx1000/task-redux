import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
//      <TaskForm createTasks={createTask}/>

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto ">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl text-white font-bold mb-3 capitalize ">
          Crea tu tarea
        </h1>
        <input
          placeholder="Escribe tu titulo"
          onChange={(e) => setTitle(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={title}
        />
        <textarea
          placeholder="Escribe tu descripcion"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 rounded-md text-white ">
          Submit
        </button>
      </form>
    </div>
  );
}
