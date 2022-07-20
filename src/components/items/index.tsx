import { movieApi } from "../../hooks/useFetch/interface";
import ListOrGrid from "./ListOrGrid";
import "./items.css";
import ToggleButtons from "./ToggleButtons";
import React, { useState } from "react";
import ButtonsNextPrev from "../buttonsPag";
import { useSearchParams } from "react-router-dom";

interface DataProps {
  data: movieApi | null;
  numPages: number;
  setNumPages: React.Dispatch<React.SetStateAction<number>>;
}

const Items = ({ data, numPages, setNumPages }: DataProps | any) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const handleToggle = () => setToggle(!toggle);

  return (
    <>
      <ToggleButtons toggle={toggle} handleToggle={handleToggle} />
      {!searchParams.get("genre") && (
        <ButtonsNextPrev
          numPages={numPages}
          setNumPages={setNumPages}
          data={data}
        />
      )}
      {toggle ? (
        <ul className="container-ul">
          <ListOrGrid data={data} toggle={toggle} />
        </ul>
      ) : (
        <div className="body-grid">
          <div className="container">
            <ListOrGrid data={data} toggle={toggle} />
          </div>
        </div>
      )}
    </>
  );
};

export default Items;
