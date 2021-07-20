import { useContext } from "react";
import { ProyectosContext } from "../context/projects/ProyectoStete";

const FormTareas = () => {
 const proyectosContext = useContext(ProyectosContext);
 const { proyecto } = proyectosContext;
 if (!proyecto) return null;

 return (
  <div className="formulario">
   <form>
    <div className="contenedor-input">
     <input
      type="text"
      autoComplete="off"
      className="input-text"
      placeholder="Nombre de tarea..."
      name="taskName"
     />
    </div>
    <div className="contenedor-input">
     <input
      type="submit"
      className="btn btn-block btn-primary btn-submit"
      value="agregar tarea"
     />
    </div>
   </form>
  </div>
 );
};

export default FormTareas;
