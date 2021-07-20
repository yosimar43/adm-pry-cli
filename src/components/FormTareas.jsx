const FormTareas = () => {
 return (
  <div className="formulario">
   <form>
    <div className="contenedor-input">
     <input
      type="text"
      className="input-text"
      placeholder="Nombre de tarea..."
      name="taskName"
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
