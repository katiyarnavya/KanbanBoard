// src/components/Column.js
import React from "react";
import styled from "styled-components";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const ColumnContainer = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div`
  padding: 8px;
  background-color: #ebecf0;
  flex-grow: 1;
  min-height: 100px;
`;

const Column = ({ column, tasks }) => {
    return (
        <ColumnContainer>
            <Title>{column.title}</Title>
            <Droppable droppableId={column.id}>
                {(provided) => (
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {tasks.map((task, index) => (
                            <Task key={task.id} task={task} index={index} />
                        ))}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </ColumnContainer>
    );
};

export default Column;
