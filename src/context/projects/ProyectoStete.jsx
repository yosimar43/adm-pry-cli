import { useReducer, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

import {
 AGREGAR_PROYECTO,
 AGREGAR_TAREA,
 ELIMINAR_PROYECTO,
 ELIMINAR_TAREA,
 FORMULARIO_PROYECTO,
 OBTENER_PROYECTOS,
 PROYECTO_ACTUAL,
} from "../../types";
import proyectoReducer from "./proyectoReducer";

export const ProyectosContext = createContext();

const ProyectoStete = props => {
 const initialState = {
  showFormNewProject: false,
  proyectos: [
   {
    proyectName: "TIENDA ONLINE",
    id: "062a99eb-b9e7-4672-9af2-e0bc8327eacb",
    tareasProyecto: [
     {
      taskName: "Pasarela de pago",
      complete: false,
      id: "b61544e0-6b16-42d6-9687-79680bc0fd95",
     },
     {
      taskName: "Lading page",
      complete: false,
      id: "c24e0305-2dc0-4dc5-853b-c4b94839006d",
     },
     {
      taskName: "Sistema de chat",
      complete: false,
      id: "23dce8fd-15e9-4605-9779-22d74f6a93e4",
     },
    ],
   },
  ],
  proyecto: null,
 };

 const [state, dispatch] = useReducer(proyectoReducer, initialState);

 const showForm = () => {
  dispatch({
   type: FORMULARIO_PROYECTO,
  });
 };

 const getProjects = () => {
  dispatch({ type: OBTENER_PROYECTOS, payload: state.proyectos });
 };

 const agregarProjecto = project => {
  project.id = `${uuidv4()}`;
  project.tareasProyecto = [];

  dispatch({ type: AGREGAR_PROYECTO, payload: project });
 };

 const proyectoActual = proyecto =>
  dispatch({ type: PROYECTO_ACTUAL, payload: proyecto });

 const eliminarProyecto = proyectId =>
  dispatch({ type: ELIMINAR_PROYECTO, payload: proyectId });

 const agregarTarea = tarea => {
  tarea.id = `${uuidv4()}`;

  dispatch({ type: AGREGAR_TAREA, payload: tarea });
 };

 const eliminarTarea = tareaId =>
  dispatch({ type: ELIMINAR_TAREA, payload: tareaId });

 const contextData = {
  showFormNewProject: state.showFormNewProject,
  proyectos: state.proyectos,
  proyecto: state.proyecto,
  showForm,
  getProjects,
  agregarProjecto,
  proyectoActual,
  eliminarProyecto,
  agregarTarea,
  eliminarTarea,
 };

 return (
  <ProyectosContext.Provider value={contextData}>
   {props.children}
  </ProyectosContext.Provider>
 );
};

export default ProyectoStete;
