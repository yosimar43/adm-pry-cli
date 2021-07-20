import { useContext, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ProyectosContext } from "../../../context/projects/ProyectoStete";

import Task from "./Task";

const TaskList = () => {
 const { proyecto } = useContext(ProyectosContext);

 const [task, setTasks] = useState([]);

 const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
 };

 if (!proyecto) return <h2>Selecciona un proyecto</h2>;

 return (
  <>
   <h2>Proyecto: {proyecto.proyectName}</h2>

   {proyecto.tareasProyecto.length === 0 ? (
    <h2>Que bien no hay nada pendiente :)</h2>
   ) : null}

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

     proyecto.tareasProyecto = reorder(
      proyecto.tareasProyecto,
      source.index,
      destination.index
     );
    }}
   >
    <Droppable droppableId="tasksList">
     {droppableProvided => (
      <ul
       {...droppableProvided.droppableProps}
       ref={droppableProvided.innerRef}
       className="listado-tareas"
      >
       {proyecto.tareasProyecto.map((task, index) => (
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
