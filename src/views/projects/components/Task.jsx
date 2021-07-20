const Task = ({ tarea }) => {
 const { taskName, complete } = tarea;

 return (
  <li className="tarea sombra">
   <p>{taskName}</p>
   <div className="estado">
    {complete ? (
     <button type="button" className="completo">
      Completo
     </button>
    ) : (
     <button type="button" className="incompleto">
      Incompleto
     </button>
    )}
   </div>
   <div className="acciones">
    <button type="button" className="btn btn-primario">
     Editar
    </button>
    <button type="button" className="btn btn-secundario">
     Eliminar
    </button>
   </div>
  </li>
 );
};

export default Task;
