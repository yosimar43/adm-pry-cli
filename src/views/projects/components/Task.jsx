import { useContext } from "react";
import { ProyectosContext } from "../../../context/projects/ProyectoStete";

const Task = ({ tarea }) => {
 const { eliminarTarea, editarEstadoTarea, editarTarea } =
  useContext(ProyectosContext);

 const { taskName, complete } = tarea;

 return (
  <li className="tarea sombra">
   <p>{taskName}</p>
   <div className="estado">
    {complete ? (
     <button
      type="button"
      className="completo"
      onClick={() => editarEstadoTarea(tarea)}
     >
      Completo
     </button>
    ) : (
     <button
      type="button"
      className="incompleto"
      onClick={() => editarEstadoTarea(tarea)}
     >
      Incompleto
     </button>
    )}
   </div>
   <div className="acciones">
    <button
     type="button"
     className="btn btn-primario"
     onClick={() => editarTarea(tarea)}
    >
     Editar
    </button>
    <button
     type="button"
     className="btn btn-secundario"
     onClick={() => eliminarTarea(tarea.id)}
    >
     Eliminar
    </button>
   </div>
  </li>
 );
};

export default Task;
