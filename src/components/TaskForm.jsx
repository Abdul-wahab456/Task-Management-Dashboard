import "./TaskForm.css";
import { useState } from "react";

export default function TaskForm({ tasks = [], setTasks, searchTerm = "" }) {
  const [categoryFilter, setCategoryFilter] = useState("");
  // Filter of both Search-Title and Category
  const filteredTasks = Array.isArray(tasks)
    ? tasks.filter((task) => {
        const matchesSearch = task.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesCategory =
          categoryFilter === "" || task.category === categoryFilter;
        return matchesSearch && matchesCategory;
      })
    : [];

  // Toggle complete status
  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Delete task
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  // Task counts
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  return (
    <div>
      <div className="header">
        <h2>Task Form</h2>
        <div className="filter">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            {Array.from(new Set(tasks.map((t) => t.category))).map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <div className="task-counts">
            <span>Total: {totalTasks}</span>
            <span>Pending: {pendingTasks}</span>
            <span>Completed: {completedTasks}</span>
          </div>
        </div>
      </div>
      <div className="task-grid">
        {filteredTasks.length === 0 && <p>No tasks!</p>}
        {filteredTasks.map((task, index) => (
          <div
            className={`task-card ${task.completed ? "completed" : ""}`}
            key={index}
          >
            <h3>{task.title}</h3>
            <p>
              <b>Category:</b> {task.category}
            </p>
            <p>
              <b>Description:</b> {task.description}
            </p>
            <p>
              <b>Due Date:</b> {task.date}
            </p>
            <div className="task-actions">
              <button onClick={() => toggleComplete(index)}>
                {task.completed ? "Completed" : "Mark Complete"}
              </button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
