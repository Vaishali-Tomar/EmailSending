import React, { useState } from 'react';
import axios from 'axios';

const AddTask = () => {
  const [task, setTask] = useState({
    name: '',
    cronExpression: '',
    emailRecipient: '',
    subject: '',
    message: '',
  });

  const handleChange = e => setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/tasks/add', task)
      .then(() => alert('Task added successfully'))
      .catch(err => console.error(err));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add New Task</h2>
      <form onSubmit={handleSubmit}>
        {/* Form Fields */}
        <button className="w-full bg-indigo-500 text-white font-semibold py-2 mt-4 rounded-md">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
