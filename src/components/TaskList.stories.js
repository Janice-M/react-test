// src/components/TaskList.stories.js


import React from 'react';

import TaskList from './TaskList';
import {taskData, actionsData} from './Task.stories';

//default task habibty 

export default {
    component: TaskList,
    title: 'TaskList',
    decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
    excludeStories: /.*Data$/,
  };

  // taskdata exportation 

  export const defaultTasksData = [
    { ...taskData, id: '1', title: 'Task 1' },
    { ...taskData, id: '2', title: 'Task 2' },
    { ...taskData, id: '3', title: 'Task 3' },
    { ...taskData, id: '4', title: 'Task 4' },
    { ...taskData, id: '5', title: 'Task 5' },
    { ...taskData, id: '6', title: 'Task 6' },
  ];

  