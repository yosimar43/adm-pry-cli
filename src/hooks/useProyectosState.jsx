import { useContext } from "react";
import ProyectoStete from "../context/projects/ProyectoStete";

export const useProyectoState = () => useContext(ProyectoStete);
