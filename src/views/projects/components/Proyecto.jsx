import { useContext } from "react";
import { ProyectosContext } from "../../../context/projects/ProyectoStete";

const Proyecto = ({ proyecto }) => {
 const { proyectoActual, editarTarea } = useContext(ProyectosContext);

 const { proyectName } = proyecto;
 return (
  <li>
   <button
    type="button"
    className="btn btn-blank"
    onClick={() => {
     editarTarea(null);
     proyectoActual(proyecto);
    }}
   >
    {proyectName}
   </button>
  </li>
 );
};

export default Proyecto;
