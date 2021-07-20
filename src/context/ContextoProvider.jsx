import { createContext } from "react";

const Context = createContext();

const ContextoProvider = ({ children }) => {
 return <Context.Provider value={{ data: "1" }}>{children}</Context.Provider>;
};

export default ContextoProvider;
