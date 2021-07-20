import { useContext, useEffect } from "react";
import { ProyectosContext } from "../../../context/projects/ProyectoStete";
import Proyecto from "./Proyecto";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ProyectsLists = () => {
 const { proyectos, getProjects } = useContext(ProyectosContext);
 useEffect(() => {
  getProjects();
 }, []);

 if (proyectos.lenght === 0)
  return <p>No hay proyectos, comienza creando uno </p>;

 return (
  <ul className="listado-proyectos">
   <TransitionGroup>
    {proyectos.map(project => (
     <CSSTransition timeout={400} classNames="proyecto" key={project.id}>
      <Proyecto proyecto={project} />
     </CSSTransition>
    ))}
   </TransitionGroup>
  </ul>
 );
};

export default ProyectsLists;
