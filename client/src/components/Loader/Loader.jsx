
import { PuffLoader} from "react-spinners";
import "./loader.css";

const Loader = () => {
  
  return (
    <div className="loader">
      <PuffLoader color="#999999" cssOverride={{}} size={90} />
    </div>
  );
};

export default Loader;
