import "./ProductCar.css";

const ProductCar = ({ item }) => {
  return (
    <div className="containerPC">
      <img src={item.img} width="70px" height="70px" alt={item.name}></img>
      <section className={item.category}>
        <h3>{item.name}</h3>
        <p>{item.category}</p>
      </section>
    </div>
  );
};

export default ProductCar;
