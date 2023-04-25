import { createContext, useEffect } from "react";
import { api } from "../services/api";

export const FutContext = createContext({});

interface IFutProviderProps {
  children: React.ReactNode;
}

export const FutProvider = ({ children }: IFutProviderProps) => {
  useEffect(() => {
    const camp = async () => {
      const response = await api.get('/v4/competitions/2013/matches?matchday=2');
      try {
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    };
     camp()
  }, []);

  return <FutContext.Provider value={""}>{children}</FutContext.Provider>;
};
