import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProyectosContext } from "../context/projects/ProyectoStete";

const FormTareas = () => {
 const proyectosContext = useContext(ProyectosContext);
 const { proyecto, agregarTarea } = proyectosContext;

 const [tarea, setTarea] = useState({
  taskName: "",
  complete: false,
 });

 const notifyErrorName = () =>
  toast.error("Deberias poner un texto mas descriptivo :)", {
   position: "top-center",
   autoClose: 5000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: false,
   draggable: true,
   progress: undefined,
  });

 const handlerChange = event =>
  setTarea({
   ...tarea,
   [event.target.name]: event.target.value,
  });

 const handlerSubmit = event => {
  event.preventDefault();
  if (tarea.taskName.trim() === "") return notifyErrorName();
  agregarTarea(tarea);
  setTarea({
   taskName: "",
   complete: false,
  });
 };

 if (!proyecto) return null;

 return (
  <div className="formulario">
   <ToastContainer />
   <form onSubmit={handlerSubmit}>
    <div className="contenedor-input">
     <input
      type="text"
      autoComplete="off"
      className="input-text"
      placeholder="Nombre de tarea..."
      name="taskName"
      value={tarea.taskName}
      onChange={handlerChange}
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
