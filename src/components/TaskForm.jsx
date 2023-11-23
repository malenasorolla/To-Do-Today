import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nueva Tarea:
        <input type="text" value={newTask} onChange={handleChange} />
      </label>
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;

