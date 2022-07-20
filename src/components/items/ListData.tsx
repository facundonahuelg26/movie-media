import { Link } from "react-router-dom";
import { IMGPATH, IMG_DEFAULT } from "../../helpers";
import { movieApiResult } from "../../hooks/useFetch/interface";

interface ResultProps{
  item:movieApiResult;
}

const ListData = ({item}:ResultProps) => {
  return (
    <li 
      className="item-list"
      >
      <Link to={`movie/${item.id}`}>
        <div className="container-image">
        <img
          src={`${IMGPATH}${item.poster_path}` === "https://image.tmdb.org/t/p/w1280null" ? IMG_DEFAULT : `${IMGPATH}${item.poster_path}`}
          alt={item.title}
          className={`${IMGPATH}${item.poster_path}` === "https://image.tmdb.org/t/p/w1280null" ? "image-list-default" : "image-list"}
        />
        </div>
      </Link>
      <div className="data-list">
      <p className="data-list-title">{item.title}</p>
      <p>{item.overview}</p>
        <p className="points">{item.vote_average}</p>
      </div>
    </li>
  );
};

export default ListData;
