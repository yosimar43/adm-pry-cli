import { useReducer, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

import {
 AGREGAR_PROYECTO,
 FORMULARIO_PROYECTO,
 OBTENER_PROYECTOS,
} from "../../types";
import proyectoReducer from "./proyectoReducer";

export const ProyectosContext = createContext();

const proyectos = [
 { id: 1, proyectName: "tienda virtual" },
 { id: 2, proyectName: "Intranet" },
 { id: 3, proyectName: "Diseño de sitio web" },
];

const ProyectoStete = props => {
 const initialState = {
  showFormNewProject: false,
  proyectos: [],
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

 const contextData = {
  showFormNewProject: state.showFormNewProject,
  proyectos: state.proyectos,
  showForm,
  getProjects,
  agregarProjecto,
 };

 return (
  <ProyectosContext.Provider value={contextData}>
   {props.children}
  </ProyectosContext.Provider>
 );
};

export default ProyectoStete;
