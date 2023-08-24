import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];

const ProductsPage = () => {
  return (
    <>
      <h1>Products:</h1>
      <ul>
        {PRODUCTS.map((product) => (
          //<Link to={`/products/product-${product.id}`}>
          <li key={product.id}>
            <Link to={product.id}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
