import { Link } from "react-router-dom";
import { useState } from "react";
import { rutes } from "../../helpers/rutes";

const formDefaultData = {
 name: "",
 email: "",
 password: "",
 confirm: "",
};

const NewAcount = () => {
 const [newUser, setNewUser] = useState(formDefaultData);

 const { name, email, password, confirm } = newUser;

 const handleChange = event =>
  setNewUser({ ...newUser, [event.target.name]: event.target.value.trim() });

 const handlerSubmit = event => {
  event.preventDefault();
 };

 return (
  <div className="form-usuario">
   <div className="contenedor-form sombra-dark">
    <form onSubmit={handlerSubmit}>
     <div className="campo-form">
      <label htmlFor="name">Name</label>
      <input
       type="text"
       autoComplete="off"
       id="name"
       placeholder="name"
       name="name"
       onChange={handleChange}
       value={name}
      />
     </div>
     <div className="campo-form">
      <label htmlFor="email">Email</label>
      <input
       autoComplete="off"
       type="email"
       id="email"
       placeholder="Email"
       name="email"
       onChange={handleChange}
       value={email}
      />
     </div>
     <div className="campo-form">
      <label htmlFor="password">Password</label>
      <input
       type="password"
       name="password"
       id="password"
       placeholder="password"
       onChange={handleChange}
       value={password}
      />
     </div>
     <div className="campo-form">
      <label htmlFor="confirm">Comfirm password</label>
      <input
       type="password"
       name="confirm"
       id="confirm"
       placeholder="password"
       onChange={handleChange}
       value={confirm}
      />
     </div>
     <div className="campo-form">
      <input
       type="submit"
       className="btn btn-primario btn-block"
       value="Resgitrarme"
      />
     </div>
    </form>

    <Link to={rutes.login} className="enlace-cuenta">
     Login
    </Link>
   </div>
  </div>
 );
};

export default NewAcount;
