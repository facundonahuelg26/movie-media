import { Navigate, useSearchParams } from "react-router-dom";
import Items from "../../components/items";
import Sppiner from "../../components/spinner";
import { POPULAR_RESULTS } from "../../helpers";
import { movieApi } from "../../hooks/useFetch/interface";
import { useFetch } from "../../hooks/useFetch/useFetch";

const GenresPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search")
  const { data, loading } = useFetch<movieApi>(POPULAR_RESULTS);

  if(loading) return <Sppiner/>

  if(searchParams.get("search")) return <Navigate to={`/?search=${query}`}/>
  return (
    <div>
      <Items data={data} />
    </div>
  );
};

export default GenresPage;
