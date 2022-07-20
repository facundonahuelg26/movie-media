import { FaThList } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";

interface BtnProps{
  toggle:boolean;
  handleToggle: () => void;
}

const ToggleButtons = ({toggle, handleToggle} :BtnProps) => {

  return (
    <div className="container-change-btn">
      {toggle ? (
        <div className="change-btn">
          <FaThList onClick={handleToggle}
            className="change-btn-svg"
          />
        </div>
      ) : (
        <div className="change-btn">
          <BsGrid3X3GapFill onClick={handleToggle}
            className="change-btn-svg"
          />
        </div>
      )}
    </div>
  );
};

export default ToggleButtons;
