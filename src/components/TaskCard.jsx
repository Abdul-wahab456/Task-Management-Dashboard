import "./TaskCard.css";
import { useState, useEffect } from "react";

export default function TaskCard({ tasks, setTasks }) {
  const [task, setTask] = useState({
    title: "",
    category: "",
    description: "",
    date: "",
  });
  const [message, setMessage] = useState(null);
  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target; // Gets id and value from input
    setTask({ ...task, [id.toLowerCase()]: value }); // if update the value where you write data.
  };
  const handleAddTask = () => {
    if (!task.title || !task.category || !task.description || !task.date) {
      setMessage({ type: "error", text: "Please fill all fields" });
      return;
    }

    // Add new task with unique ID
    const newTask = {
      ...task,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    // Reset form
    setTask({ title: "", category: "", description: "", date: "" });
    setMessage({ type: "success", text: "Task Saved Successfully!" });

    setTimeout(() => setMessage(null), 3000);
  };
  return (
    <div>
      <h1>Task Dashboard</h1>
      <h5>Manage your task Efficiently</h5>
      {message && (
        <div className={`message ${message.type}`}> {message.text} </div>
      )}
      <div className="box_task_card">
        <div className="input-group">
          <div className="field Title">
            <label htmlFor="Title">Title</label>
            <input
              type="text"
              id="Title"
              className="task_input"
              placeholder="..."
              value={task.title}
              onChange={handleChange}
            />
          </div>
          <div className="field Category">
            <label htmlFor="Category">Category</label>
            <select
              id="Category"
              className="task_input"
              value={task.category}
              onChange={handleChange}
            >
              <option value="">Select a category...</option>
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="shopping">Shopping</option>
              <option value="education">Education</option>
              <option value="health">Health</option>
            </select>
          </div>
          <div className="field description">
            <label htmlFor="Description">Description</label>
            <textarea
              id="Description"
              className="task_input"
              placeholder="..."
              value={task.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="field date">
            <label htmlFor="Date">Date</label>
            <input
              type="date"
              id="Date"
              className="task_input"
              value={task.date}
              onChange={handleChange}
            />
          </div>
          <div className="field add-task">
            <br />
            <button className="task_button" onClick={handleAddTask}>
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
