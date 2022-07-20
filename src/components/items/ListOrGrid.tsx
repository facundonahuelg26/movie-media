import { useSearchParams } from "react-router-dom";
import { movieApi, movieApiResult } from "../../hooks/useFetch/interface";
import GridData from "./GridData";
import ListData from "./ListData";

interface DataProps {
  data: movieApi | null;
  toggle: boolean;
}

const ListOrGrid = ({ data, toggle }:DataProps) => {
  const [searchParams] = useSearchParams();
 
  const ids = searchParams.get("genre_ids");
  
  const matchingResults = data?.results.filter(item => (
    item.genre_ids.includes(Number(ids))
  ));
   
  const changingData = ids ? matchingResults : data?.results
  if(ids && matchingResults?.length === 0) return <h1 className="no-results-items">No results</h1>
  if(changingData === undefined) return null;
  return (
    <>
      {changingData.map((item: movieApiResult) => (
        <div key={item.id}>
          {toggle ? <ListData item={item} /> : <GridData item={item} />}
        </div>
      ))}
    </>
  );
};

export default ListOrGrid;
