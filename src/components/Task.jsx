// src/components/Task.js
import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const TaskContainer = styled.div`
  padding: 8px;
  margin: 8px 0;
  background-color: #f4f5f7;
  border: 1px solid #dfe1e6;
  border-radius: 4px;
`;

const Task = ({ task, index }) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <TaskContainer
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {task.content}
                </TaskContainer>
            )}
        </Draggable>
    );
};

export default Task;
