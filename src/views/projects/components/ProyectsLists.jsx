import { useContext, useEffect } from "react";
import { ProyectosContext } from "../../../context/projects/ProyectoStete";
import Proyecto from "./Proyecto";

const ProyectsLists = () => {
 const { proyectos, getProjects } = useContext(ProyectosContext);
 useEffect(() => {
  getProjects();
 }, []);

 if (proyectos.lenght === 0) return null;

 return (
  <ul className="listado-proyectos">
   {proyectos.map(project => (
    <Proyecto key={project.id} proyecto={project} />
   ))}
  </ul>
 );
};

export default ProyectsLists;
