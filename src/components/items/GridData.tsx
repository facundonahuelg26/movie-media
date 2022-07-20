import { Link } from "react-router-dom";
import { IMGPATH, IMG_DEFAULT } from "../../helpers";
import { movieApiResult } from "../../hooks/useFetch/interface";

interface ResultProps {
  item: movieApiResult;
}

const GridData = ({ item }: ResultProps) => {
  IMGPATH;

  return (
    <div className="item">
      <Link to={`movie/${item.id}`}>
        <img
          src={`${IMGPATH}${item.poster_path}` === "https://image.tmdb.org/t/p/w1280null" ? IMG_DEFAULT : `${IMGPATH}${item.poster_path}`}
          alt={item.title}
          className={`${IMGPATH}${item.poster_path}` === "https://image.tmdb.org/t/p/w1280null" ? "image-default" : "image"}
        />
      </Link>
    </div>
  );
};

export default GridData;
