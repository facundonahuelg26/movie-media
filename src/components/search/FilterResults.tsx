import { Link } from "react-router-dom";
import { IMGPATH } from "../../helpers";
import { movieApi, movieApiResult } from "../../hooks/useFetch/interface";

interface Data {
  data: movieApi;
  search: string;
}
const FilterResults = ({ data, search }: Data) => {
  IMGPATH
  if(data.total_results === 0) return <p className="no-results">No results</p>
  return (
    <>
      {data?.results.slice(0, 4).map((item: movieApiResult) => (
        <li key={item.id} className="item-filter">
          <Link to={`movie/${item.id}`} className="link-filter">
            {item.poster_path && (
              <img
                src={`${IMGPATH}/${item.poster_path}`}
                alt={item.title}
                className="img-filter"
              />
            )}
            <div className="cont-title">
              <p>{item.title.substring(0,8)}...</p>
            </div>
          </Link>
        </li>
      ))}
      {data.total_results > 4 && (
        <div className="more-results">
          <Link to={`?search=${search}`}>
            More results
          </Link>
        </div>
      )}
    </>
  );
};

export default FilterResults;
