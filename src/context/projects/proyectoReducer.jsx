import {
 AGREGAR_PROYECTO,
 ELIMINAR_PROYECTO,
 FORMULARIO_PROYECTO,
 OBTENER_PROYECTOS,
 PROYECTO_ACTUAL,
} from "../../types";

const proyectoReducer = (state, action) => {
 switch (action.type) {
  case OBTENER_PROYECTOS:
   return { ...state, proyectos: action.payload };

  case FORMULARIO_PROYECTO:
   return { ...state, showFormNewProject: true };

  case PROYECTO_ACTUAL:
   return { ...state, proyecto: action.payload };

  case AGREGAR_PROYECTO:
   return {
    ...state,
    proyectos: [...state.proyectos, action.payload],
    showFormNewProject: false,
   };

  case ELIMINAR_PROYECTO:
   return {
    ...state,
    proyectos: state.proyectos.filter(
     proyecto => proyecto.id !== action.payload
    ),
    proyecto: null,
   };

  default:
   return state;
 }
};
export default proyectoReducer;
