import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/products");
  }
  
  return (
    <Fragment>
      <p>My Home Page</p>
      <p>
        {/* Products: <a href="/products">(here are)</a>. */}
        Products: <Link to="products">(here are)</Link>.
        <button onClick={navigateHandler}>Havigate to products</button>
      </p>
    </Fragment>
  );
};

export default HomePage;
