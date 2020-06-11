import React from "react";
// import { useQuery } from "@apollo/react-hooks";
// import { GET_POKEMON_ARR, iGET_POKEMON_ARR } from "./services/querys";

// Pages
import HomePage from "./pages/Home";
// import ErrorPage from "./pages/Error";
// import LoadingPage from "./pages/Loading";

const Router: React.FC = () => {
  // const { loading, error, data } = useQuery<iGET_POKEMON_ARR>(GET_POKEMON_ARR);

  // if (loading) return <LoadingPage />;
  // if (error) return <ErrorPage />;

  return <HomePage />;
};

export default Router;
