// src / components/Task.stories.js

import React from 'react';
import { action } from "@storybook/addon-actions";

import Task from './Task';

export default{
    component:Task,
    title: 'Task',

    // shea butter baby, exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,

};

//function for the data we need for magical tasks habibty

export const taskData= {

    id: '1',
    title:'Magic Task',
    state:'magicalTaskBox',
    updatedAt:new Date(2020,0,12,3,0),


};

//actions you can apply to your magical quest tasks

export const actionsData= {
    onPinTask: action('onPinTask'),
    onArchiveTask: action ('onArchiveTask'),
};

//function to view all tasks hayaty

export const Default =() => {
    return <Task task ={{ ...taskData, state:'TASK_PINNED' }}  {...actionsData} />


};