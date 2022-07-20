import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/error";
import GenresPage from "../pages/genres";
import Home from "../pages/home";
import Layout from "../pages/Layout";
import Movie from "../pages/movie";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<GenresPage />} />
          <Route path="movie/:id" element={<Movie />} />
        </Route>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
};
