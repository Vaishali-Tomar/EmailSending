import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TaskLogs from './components/TaskLogs';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Task Scheduler</h1>
      <AddTask />
      <TaskList />
      <TaskLogs />
    </div>
  );
}

export default App;
