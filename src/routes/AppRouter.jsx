import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RedirectToLogin from "../components/RedirectToLogin";
import ProyectoStete from "../context/projects/ProyectoStete";
import { rutes } from "../helpers/rutes";
import LoginPage from "../views/auth/LoginPage";
import NewAcount from "../views/auth/NewAcount";
import projects from "../views/projects/projects";

const AppRouter = () => {
 return (
  <ProyectoStete>
   <Router>
    <Switch>
     <Route exact path={rutes.home} component={RedirectToLogin} />
     <Route exact path={rutes.login} component={LoginPage} />
     <Route exact path={rutes.newAcount} component={NewAcount} />
     <Route exact path={rutes.projects} component={projects} />
    </Switch>
   </Router>
  </ProyectoStete>
 );
};

export default AppRouter;
