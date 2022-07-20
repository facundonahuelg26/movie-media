import { useParams } from 'react-router-dom';
import Comments from '../../components/singleMovie/Comments';
import GenresAndLang from '../../components/singleMovie/GenresAndLang';
import RatingAndLikes from '../../components/singleMovie/RatingAndLikes';
import TitleAndOverview from '../../components/singleMovie/TitleAndOverview';
import { movieObject } from '../../hooks/useFetch/interface';
import { useFetch } from '../../hooks/useFetch/useFetch';
import "../../components/singleMovie/singleMovie.css";
import { BASE_URL, IMGPATH } from '../../helpers';
import Sppiner from '../../components/spinner';

const Movie = () => {
    IMGPATH
    const {id} = useParams()
    const {data} = useFetch<movieObject>(`${BASE_URL}movie/${id}${import.meta.env.VITE_API_KEY_v2}`)
    if (data === null) return <Sppiner/>;
  return (
    <div className="container-single-movie">
    <img
      src={`${IMGPATH}${data.backdrop_path}`}
      alt={data.title}
      className="bg-image"
    />
    <div className="container-description">
      <div>
      <img
        src={`${IMGPATH}/${data.poster_path}`}
        alt={data.title}
        className="descrip-image"
      />
      </div>
      <div className="container-info">
        <TitleAndOverview data={data} />
        <GenresAndLang data={data}/>
        <RatingAndLikes data={data} />
      </div>
    </div>
    <img
      src={`${IMGPATH}/${data.poster_path}`}
      alt={data.title}
      className="big-image"
    />
    <Comments data={data} />
  </div>
  )
}

export default Movie;

