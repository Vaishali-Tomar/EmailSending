import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="bg-white p-6 shadow-md rounded-lg mt-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Scheduled Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task._id} className="border-b py-2">
            <p>{task.name} - {task.cronExpression}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
