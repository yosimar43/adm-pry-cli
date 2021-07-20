import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Task from "./Task";

const TaskList = () => {
 const proyectName = "Tienda virtual";
 const tareasProyecto = [
  { taskName: "Crear pasarela de pago", complete: false, id: "1" },
  { taskName: "Crear nav bar", complete: false, id: "2" },
  { taskName: "Crear Error 404 page", complete: false, id: "3" },
 ];

 const [task, setTasks] = useState(tareasProyecto);

 const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
 };

 return (
  <>
   <h2>Proyecto:{proyectName}</h2>

   <DragDropContext
    onDragEnd={result => {
     const { source, destination } = result;
     if (!destination) {
      return;
     }
     if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
     ) {
      return;
     }

     setTasks(prevTasks => reorder(prevTasks, source.index, destination.index));
    }}
   >
    <Droppable droppableId="tasksList">
     {droppableProvided => (
      <ul
       {...droppableProvided.droppableProps}
       ref={droppableProvided.innerRef}
       className="listado-tareas"
      >
       {task.map((task, index) => (
        <Draggable key={task.id} draggableId={task.id} index={index}>
         {draggableProvided => (
          <div
           ref={draggableProvided.innerRef}
           {...draggableProvided.draggableProps}
           {...draggableProvided.dragHandleProps}
          >
           <Task tarea={task} />
          </div>
         )}
        </Draggable>
       ))}
       {droppableProvided.placeholder}
      </ul>
     )}
    </Droppable>
   </DragDropContext>

   <div className="btn-container">
    <button type="button" className="btn  btn-eliminar">
     Eliminar Proyecto &times;
    </button>
   </div>
  </>
 );
};

export default TaskList;
