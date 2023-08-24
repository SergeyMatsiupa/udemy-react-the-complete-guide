import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    title: "My first book",
    price: 6,
    description: "This is a first book I ever wrote",
    id: 2,
  },
  {
    title: "My second book",
    price: 5,
    description: "This is a second book I ever wrote",
    id: 3,
  },
];

const Products = (props) => {
  // const itemValues = {
  //   title: "Test",
  //   price: 6,
  //   description: "This is a first product - amazing!",
  //   id: 2
  // };

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {/* <ProductItem
          title = {itemValues.title}
          price={itemValues.price}
          description={itemValues.description}
          id= {itemValues.id}
        /> */}
        {DUMMY_DATA.map((item) => (
          <ProductItem
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            id={item.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
