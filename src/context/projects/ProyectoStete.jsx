import { useReducer, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

import {
 AGREGAR_PROYECTO,
 FORMULARIO_PROYECTO,
 OBTENER_PROYECTOS,
 PROYECTO_ACTUAL,
} from "../../types";
import proyectoReducer from "./proyectoReducer";

export const ProyectosContext = createContext();

const proyectos = [];

const ProyectoStete = props => {
 const initialState = {
  showFormNewProject: false,
  proyectos: [],
  proyecto: null,
 };

 const [state, dispatch] = useReducer(proyectoReducer, initialState);

 const showForm = () => {
  dispatch({
   type: FORMULARIO_PROYECTO,
  });
 };

 const getProjects = () => {
  dispatch({ type: OBTENER_PROYECTOS, payload: proyectos });
 };

 const agregarProjecto = project => {
  project.id = uuidv4();
  dispatch({ type: AGREGAR_PROYECTO, payload: project });
 };

 const proyectoActual = proyecto =>
  dispatch({ type: PROYECTO_ACTUAL, payload: proyecto });

 const contextData = {
  showFormNewProject: state.showFormNewProject,
  proyectos: state.proyectos,
  proyecto: state.proyecto,
  showForm,
  getProjects,
  agregarProjecto,
  proyectoActual,
 };

 return (
  <ProyectosContext.Provider value={contextData}>
   {props.children}
  </ProyectosContext.Provider>
 );
};

export default ProyectoStete;
