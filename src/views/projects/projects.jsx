import Barra from "../../components/Barra";
import FormTareas from "../../components/FormTareas";
import SideBar from "./components/SideBar";
import TaskList from "./components/TaskList";

const projects = () => {
 return (
  <div className="contenedor-app">
   <SideBar />
   <div className="seccion-principal">
    <Barra />
    <main>
     <FormTareas />
     <div className="contenedor-tareas">
      <TaskList />
     </div>
    </main>
   </div>
  </div>
 );
};

export default projects;
