import "./Carrinho.css";
import ProductCar from "../ProductCar";

const Carrinho = ({
  currentSale,
  setCurrentSale,
  removerItem,
  verify,
  setVerify,
}) => {
  if (verify) {
    return (
      <div className="containerCar">
        <div className="title">
          <h2>Carrinho de compras</h2>
        </div>
        {currentSale.map((item) => (
          <div className="contentSale">
            <ProductCar item={item} />
            <p
              className="bt"
              name="remove"
              onClick={() => {
                currentSale.length === 1
                  ? setVerify(false)
                  : removerItem(item.name);
              }}
            >
              Remover
            </p>
          </div>
        ))}
        <div className="contentBT">
          <div className="salePrice">
            <p name="total">Total</p>
            <p>R$ {currentSale.reduce((a, b) => a + b.price, 0).toFixed(2)}</p>
          </div>
          <button
            className="removeAll"
            onClick={() => {
              setCurrentSale([]);
              setVerify(false);
            }}
          >
            Remover todos
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="containerCar">
      <div className="title">
        <h2>Carrinho de compras</h2>
      </div>
      <div className="content">
        <span>Sua sacola está vazia</span>
        <p>Adicione itens</p>
      </div>
    </div>
  );
};

export default Carrinho;
