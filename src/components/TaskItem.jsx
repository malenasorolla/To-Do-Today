import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { useState } from 'react';

const TaskItem = ({ task, onTaskComplete, onTaskDelete }) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(!completed);
    onTaskComplete(task.id);
    swal('¡Buen trabajo!', 'Has completado una tarea.', 'success');
  };

  const handleDelete = () => {
    onTaskDelete(task.id);
    swal('Eliminado', 'Has eliminado una tarea.', 'info');
  };

  return (
    <div>
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task.text}</span>
      <button onClick={handleComplete}>Completar</button>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default TaskItem;

TaskItem.propTypes = {
  task: PropTypes.object,
  onTaskComplete: PropTypes.func,
  onTaskDelete: PropTypes.func,
};
