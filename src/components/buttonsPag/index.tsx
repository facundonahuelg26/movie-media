import { FcPrevious, FcNext } from "react-icons/fc";
import { movieApi } from "../../hooks/useFetch/interface";
import "./btns.css";

interface Props{
  numPages:number;
  setNumPages:React.Dispatch<React.SetStateAction<number>>;
  data: movieApi | null;
}

const ButtonsNextPrev = ({numPages, setNumPages, data}:Props) => {

  const handlePrev = () => {
    setNumPages(numPages -1)
  }

  const handleNext = () => {
    setNumPages(numPages + 1)
  }
  return (
    <div className="btns-container">
      <div className="btns-container-child">
        <button 
          disabled={numPages === 1 && true}
          className="btns-pag" 
          onClick={handlePrev}
        >
          <FcPrevious className="btns-pag-child-1" />
        </button>
        <button 
          disabled={numPages === data?.total_pages && true}
          className="btns-pag" 
          onClick={handleNext}
        >
          <FcNext className="btns-pag-child-2" />
        </button>
      </div>
    </div>
  );
};

export default ButtonsNextPrev;
