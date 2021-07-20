import { useContext } from "react";
import { ProyectosContext } from "../../../context/projects/ProyectoStete";

const Proyecto = ({ proyecto }) => {
 const { proyectoActual } = useContext(ProyectosContext);

 const { proyectName } = proyecto;
 return (
  <li>
   <button
    type="button"
    className="btn btn-blank"
    onClick={() => proyectoActual(proyecto)}
   >
    {proyectName}
   </button>
  </li>
 );
};

export default Proyecto;
