import { Link } from "react-router-dom";
import { useState } from "react";
import { rutes } from "../../helpers/rutes";

const formDefaultData = {
 email: "",
 password: "",
};

const LoginPage = () => {
 const [user, setUser] = useState(formDefaultData);
 const [error, setEror] = useState({});

 const { email, password } = user;

 const handleChange = event =>
  setUser({ ...user, [event.target.name]: event.target.value });

 const handlerSubmit = event => {
  event.preventDefault();
 };

 return (
  <div className="form-usuario">
   <div className="contenedor-form sombra-dark">
    <form onSubmit={handlerSubmit}>
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
      <input
       type="submit"
       className="btn btn-primario btn-block"
       value="Iniciar Sesión"
      />
     </div>
    </form>

    <Link to={rutes.newAcount} className="enlace-cuenta">
     Obtener Cuenta
    </Link>
   </div>
  </div>
 );
};

export default LoginPage;
