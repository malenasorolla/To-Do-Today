import React, { useState } from 'react';

const TaskItem = ({ task, onTaskComplete, onTaskDelete }) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(!completed);
    onTaskComplete(task.id);
  };

  const handleDelete = () => {
    onTaskDelete(task.id);
  };

  return (
    <div>
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={handleComplete}>Completar</button>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default TaskItem;
