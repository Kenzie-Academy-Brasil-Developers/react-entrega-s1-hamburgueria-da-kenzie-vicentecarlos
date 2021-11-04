import "./Product.css";

const Product = ({ item, handleClick, setVerify }) => {
  return (
    <div className="containerP">
      <section className="imgCont">
        <img className="foodImg" src={item.img}></img>
      </section>
      <section className="food">
        <h3>{item.name}</h3>
        <h4>{item.category}</h4>
        <span>R$ {item.price}</span>
        <button
          className="btProduct"
          onClick={() => {
            setVerify(true);
            handleClick(item.id);
          }}
        >
          Adicionar
        </button>
      </section>
    </div>
  );
};

export default Product;
