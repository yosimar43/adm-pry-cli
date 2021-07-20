import { useState, useContext } from "react";
import { ProyectosContext } from "../../../context/projects/ProyectoStete";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NuevoProjecto = () => {
 const [proyect, setProyect] = useState({
  proyectName: "",
  tareasProyecto: [],
 });

 const notify = () =>
  toast.warn("El nombre no puede estar vacio ", {
   position: "top-left",
   autoClose: 5000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
  });

 const { showFormNewProject, showForm, agregarProjecto } =
  useContext(ProyectosContext);

 const { proyectName } = proyect;

 const handlerChange = event => {
  setProyect(state => ({
   ...state,
   [event.target.name]: event.target.value,
  }));
 };

 const handlerSubmit = event => {
  event.preventDefault();
  if (proyect.proyectName.trim() === "") return notify();
  agregarProjecto(proyect);
  setProyect({ proyectName: "" });
 };

 return (
  <>
   <ToastContainer />
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
  </>
 );
};

export default NuevoProjecto;
