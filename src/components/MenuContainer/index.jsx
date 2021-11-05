import Product from "../Product";
import "./MenuContainer.css";

const MenuContainer = ({
  products,
  handleClick,
  filteredProducts,
  setVerify,
  currentSale,
}) => {
  return (
    <div className="containerMC">
      {filteredProducts.length === 0
        ? products.map((item) => (
            <Product
              item={item}
              handleClick={handleClick}
              setVerify={setVerify}
              currentSale={currentSale}
            />
          ))
        : filteredProducts.map((item) => (
            <Product
              item={item}
              handleClick={handleClick}
              setVerify={setVerify}
              currentSale={currentSale}
            />
          ))}
    </div>
  );
};

export default MenuContainer;
