import { useState, useContext } from "react";
import { ProyectosContext } from "../../../context/projects/ProyectoStete";

const NuevoProjecto = () => {
 const [proyect, setProyect] = useState({
  proyectName: "",
 });

 const { showFormNewProject, showForm, agregarProjecto } =
  useContext(ProyectosContext);

 const { proyectName } = proyect;

 const [showMesaggeError, setShowMesaggeError] = useState(false);

 const handlerChange = event => {
  setProyect(state => ({
   ...state,
   [event.target.name]: event.target.value,
  }));
 };

 const handlerSubmit = event => {
  event.preventDefault();
  if (proyect.proyectName.trim() === "") return setShowMesaggeError(true);
  setShowMesaggeError(false);
  agregarProjecto(proyect);
  setProyect({ proyectName: "" });
 };

 return (
  <>
   <button
    type="buttom"
    className="btn btn-block btn-primario"
    onClick={showForm}
   >
    Nuevo Projecto
   </button>

   {showFormNewProject && (
    <form className="formulario-nuevo-proyecto" onSubmit={handlerSubmit}>
     <input
      type="text"
      autoComplete="off"
      className="input-text"
      placeholder="Nombre proyectos"
      name="proyectName"
      onChange={handlerChange}
      value={proyectName}
     />

     <input
      type="submit"
      className="btn btn-primario btn-block"
      value="Agregar proyectos"
     />
    </form>
   )}
   {showMesaggeError && (
    <p className="">El Nombre de proyecto no puede estar en blanco</p>
   )}
  </>
 );
};

export default NuevoProjecto;
