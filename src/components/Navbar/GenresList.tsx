import { Link } from "react-router-dom";
import { GENRES_RESULTS } from "../../helpers";
import { movieApiGenres, genresMovieObj } from "../../hooks/useFetch/interface";
import { useFetch } from "../../hooks/useFetch/useFetch";

const GenresList = () => {
  const { data } = useFetch<movieApiGenres>(GENRES_RESULTS);
  
  if (data === null) return <h1>Loading...</h1>;
  return (
    <>
      {data.genres.map((item: genresMovieObj) => (
        <li key={item.id} className="genres-li">
          <Link to={`/movies?genre=${item.name}&genre_ids=${item.id}`} className="nested-link">{item.name}</Link>
        </li>
      ))}
    </>
  );
};

export default GenresList;
