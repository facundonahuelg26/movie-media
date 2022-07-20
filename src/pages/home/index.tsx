import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Items from "../../components/items";
import Sppiner from "../../components/spinner";
import { PAGES, POPULAR_RESULTS, SEARCH_URL,  } from "../../helpers";
import { movieApi } from "../../hooks/useFetch/interface";
import { useFetch } from "../../hooks/useFetch/useFetch";

const Home = () => {

  const [searchParams] = useSearchParams()
  const [numPages, setNumPages] = useState<number>(1)
  const url:string = searchParams.get("search") ? `${SEARCH_URL}${searchParams.get("search")}${PAGES}${numPages}` : `${POPULAR_RESULTS}${numPages}`;
  const {data, loading}  = useFetch<movieApi>(url);
  
  if(loading) return <Sppiner/>
  return (
    <div>
      <Items 
        data={data}
        numPages={numPages}
        setNumPages={setNumPages}
      />
    </div>
  );
};

export default Home;
