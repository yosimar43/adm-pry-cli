import {
 ACTUALIZAR_TAREA,
 AGREGAR_PROYECTO,
 AGREGAR_TAREA,
 EDITAR_TAREA,
 ELIMINAR_PROYECTO,
 ELIMINAR_TAREA,
 ESTADO_TAREA,
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

  case AGREGAR_TAREA: {
   let proyectoNewTask = [...state.proyecto.tareasProyecto, action.payload];
   let projectupdate = { ...state.proyecto, tareasProyecto: proyectoNewTask };

   return {
    ...state,
    proyectos: state.proyectos.map(projecto =>
     projecto.id === projectupdate.id ? projectupdate : projecto
    ),
    proyecto: projectupdate,
   };
  }
  case ELIMINAR_TAREA: {
   let projectupdate = {
    ...state.proyecto,
    tareasProyecto: state.proyecto.tareasProyecto.filter(
     tarea => tarea.id !== action.payload
    ),
   };

   return {
    ...state,
    proyectos: state.proyectos.map(projecto =>
     projecto.id === projectupdate.id ? projectupdate : projecto
    ),
    proyecto: projectupdate,
   };
  }
  case ESTADO_TAREA: {
   let proyectoActual = {
    ...state.proyecto,
    tareasProyecto: state.proyecto.tareasProyecto.map(tarea =>
     tarea.id === action.payload.id ? action.payload : tarea
    ),
   };

   let prueba = state.proyectos.filter(el => el.id !== proyectoActual.id);

   prueba = [...prueba, proyectoActual];
   return {
    ...state,
    proyectos: prueba,
    proyecto: proyectoActual,
   };
  }
  case EDITAR_TAREA:
   return { ...state, tarea: action.payload };

  case ACTUALIZAR_TAREA: {
   let proyectoNewTask = state.proyecto.tareasProyecto.map(tarea =>
    tarea.id === action.payload.id ? action.payload : tarea
   );
   let projectupdate = { ...state.proyecto, tareasProyecto: proyectoNewTask };

   console.log(proyectoNewTask);
   return {
    ...state,
    proyectos: state.proyectos.map(projecto =>
     projecto.id === projectupdate.id ? projectupdate : projecto
    ),
    proyecto: projectupdate,
    tarea: null,
   };
  }

  default:
   return state;
 }
};
export default proyectoReducer;
