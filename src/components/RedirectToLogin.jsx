import { Redirect } from "react-router-dom";
import { rutes } from "../helpers/rutes";

const RedirectToLogin = () => {
 return <Redirect to={rutes.login} />;
};

export default RedirectToLogin;
