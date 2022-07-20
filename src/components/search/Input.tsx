import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { SEARCH_URL } from "../../helpers";
import { movieApi } from "../../hooks/useFetch/interface";
import { useFetch } from "../../hooks/useFetch/useFetch";
import FilterResults from "./FilterResults";
import "./input.css";
import { IoCloseSharp } from 'react-icons/io5';


type InputChangeEvent = ChangeEvent<HTMLInputElement>;


const Input = () => {
  const [search, setSearch] = useState<string>("");
  const [searchParams] = useSearchParams()
  const {id} = useParams()
  
  const closeRef = useRef<HTMLDivElement>(null)

  SEARCH_URL
  const handleChange = (e: InputChangeEvent) => {
    setSearch(e.target.value);
  };

  const { data } = useFetch<movieApi>(`${SEARCH_URL}${search}`, search);

  useEffect(() => {
    if(searchParams.get("search") || id){
      setSearch("")
    }
  }, [searchParams, id])
  
  const handleClose = () => {
    if(closeRef.current){
      setSearch("")
    }
  }
  
  return (
    <div className="container-inp-list">
      <div className="input-container">
      <input
        type="text"
        placeholder="Which movie to watch?"
        value={search}
        onChange={handleChange}
        className="input"
      />
      </div>
      {search.length && <div 
        onClick={handleClose}
        ref={closeRef}
        className="close-button">
        <svg><IoCloseSharp/></svg>
      </div>}
      {search.length === 0 ? null : (
        <div className="autocomplete-container">
        <ul className="autocomplete">
            {!data ? null : <FilterResults data={data} search={search} />}
        </ul>
        </div>
      )}
    </div>
  );
};

export default Input;
