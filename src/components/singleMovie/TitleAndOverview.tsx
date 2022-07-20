import { movieObject } from "../../hooks/useFetch/interface";

interface Props {
  data: movieObject;
}

const TitleAndOverview = ({ data }: Props) => {
  return (
    <>
      <h1 className="main-title">{data.title}</h1>
      <div className="sub-container-overview">
        <h2 className="subtitles">Overview:</h2>
        <p>{data.overview}</p>
      </div>
    </>
  );
};

export default TitleAndOverview;
