import Product from "../Product";
import "./MenuContainer.css";

const MenuContainer = ({
  products,
  handleClick,
  filteredProducts,
  setVerify,
}) => {
  return (
    <div className="containerMC">
      {filteredProducts.length === 0
        ? products.map((item) => (
            <Product
              item={item}
              handleClick={handleClick}
              setVerify={setVerify}
            />
          ))
        : filteredProducts.map((item) => (
            <Product
              item={item}
              handleClick={handleClick}
              setVerify={setVerify}
            />
          ))}
    </div>
  );
};

export default MenuContainer;
