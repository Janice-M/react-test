// src/components/Task.js

import React from 'react';

export default function Task ({task: {id,title, state}, onArchiveTask, onPinTask}){
    return (
        <div className = {`list-item ${state} `}>
            <label className="checkbox" >
                <input
                    type="checkbox"
                    defaultChecked={state === 'TASK_ARCHIVED'}
                    disabled={ true }
                    name="checked"
                    />
                <span className="checkbox-custom" onClick={() => onArchiveTask(id)}  />
            </label>
        </div>



    );
}