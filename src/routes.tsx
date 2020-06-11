import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMON_ARR, iGET_POKEMON_ARR } from "./services/querys";
import { usePokeState } from "./store/Pokemon";

// Pages
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import LoadingPage from "./pages/Loading";

const Router: React.FC = () => {
  const setData = usePokeState((state) => state.setData);
  const { loading, error, data } = useQuery<iGET_POKEMON_ARR>(GET_POKEMON_ARR);

  if (loading) return <LoadingPage />;
  if (error) return <ErrorPage />;
  if (data) {
    setData(data);
  }

  return <HomePage />;
};

export default Router;
