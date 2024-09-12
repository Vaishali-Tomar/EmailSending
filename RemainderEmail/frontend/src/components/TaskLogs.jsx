import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks/logs')
      .then(response => setLogs(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="bg-white p-6 shadow-md rounded-lg mt-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Task Logs</h2>
      <ul>
        {logs.map(log => (
          <li key={log._id} className="border-b py-2">
            <p>{log.taskName} - {log.status} - {new Date(log.timestamp).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskLogs;
