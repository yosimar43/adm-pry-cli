import NuevoProjecto from "./NuevoProjecto";
import ProyectsLists from "./ProyectsLists";

const SideBar = () => {
 return (
  <aside>
   <h1>
    MERN <span>Task</span>
   </h1>
   <NuevoProjecto />
   <div className="proyectos">
    <h2>Tus Proyectos</h2>
    <ProyectsLists />
   </div>
  </aside>
 );
};

export default SideBar;
