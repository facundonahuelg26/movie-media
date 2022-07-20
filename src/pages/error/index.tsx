import { Link } from "react-router-dom";
import "./errorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div>
        <h1>Page doesn't exist</h1>
        <Link to="/" className="error-page-link">Go back to Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
