import logo from "./logo.svg";
import "./reset.css";
import "./App.css";
import { useState } from "react";

import MenuContainer from "./components/MenuContainer";
import Cabecalho from "./components/Cabecalho";
import Carrinho from "./components/Carrinho";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "McShake Ovomaltine",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  // const [cartTotal, setCartTotal] = useState(0);
  const [verify, setVerify] = useState(false);

  const showProducts = (show) => {
    const filteR = products.filter((item) => item.category === show);
    setFilteredProducts(filteR);
  };

  const handleClick = (productId) => {
    const finD = products.find((item) => item.id === productId);
    setCurrentSale([...currentSale, finD]);
  };

  const removerItem = (itemName) => {
    const filteR = currentSale.filter((item) => item.name !== itemName);
    setCurrentSale(filteR);
  };

  return (
    <div className="App">
      <header>
        <Cabecalho showProducts={showProducts} />
      </header>
      <main>
        <MenuContainer
          products={products}
          handleClick={handleClick}
          filteredProducts={filteredProducts}
          setVerify={setVerify}
          currentSale={currentSale}
        />
        <Carrinho
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          removerItem={removerItem}
          verify={verify}
          setVerify={setVerify}
        />
      </main>
    </div>
  );
}

export default App;
