const Proyecto = ({ proyecto }) => {
 const { proyectName } = proyecto;
 return (
  <li>
   <button type="button" className="btn btn-blank">
    {proyectName}
   </button>
  </li>
 );
};

export default Proyecto;
