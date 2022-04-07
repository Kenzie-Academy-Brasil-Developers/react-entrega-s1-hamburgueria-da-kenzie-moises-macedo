import { useState } from "react";

import "./Assests/Styles/Css/global.css";
import ShoppingCart from "./Components/ShoppingCart";
import CardsProducts from "./Components/CardsProducts";

function App() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 14.00, img: 'https://i.ibb.co/fpVHnZL/hamburguer.png' },
        { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 16.00, img: 'https://i.ibb.co/djbw6LV/x-burgue.png' },
        { id: 3, name: 'Big Kenzie', category: 'Sanduíches', price: 18.00, img: 'https://i.ibb.co/FYBKCwn/big-kenzie.png' },
        { id: 4, name: 'Fanta Guaraná', category: 'Bebidas', price: 5.00, img: 'https://i.ibb.co/cCjqmPM/fanta-guarana.png' },
        { id: 5, name: 'Coca-Cola', category: 'Bebidas', price: 4.99, img:'https://i.ibb.co/fxCGP7k/coca-cola.png' },
        { id: 6, name: 'Milkshake Ovomaltine', category: 'Bebidas', price: 4.99, img: 'https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png' },
      ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [userInput, setUserInput] = useState("");
  
  const showProducts = () => {
    const newList = products.filter((element) => {
      return (
        element.name.toLowerCase().includes(userInput.toLowerCase()) ||
        element.category.toLowerCase().includes(userInput.toLowerCase())
      );
    });
    setFilteredProducts([...newList]);
    
  };

  const realod = () => {
    setFilteredProducts([]);
    setCurrentSale([]);
    setCartTotal(0);
    setUserInput("")

    // window.location.reload()

  }

  
  const handleClick = (productId) => {
    const found = products.find((element) => {
      return (
        element.id === productId && currentSale.every((e) => e.id !== productId)
      );
    });
    if (found === undefined) {
      return;
    }
    setCurrentSale((prevCurrentSale) => [...prevCurrentSale, found]);
    setCartTotal(
      currentSale.reduce((prevTotal, product) => {
        return product.price + prevTotal;
      }, found.price)
    );
  };

  const removeItem = (product) => {
    setCurrentSale(
      currentSale.filter((el) => {
        return product.id !== el.id;
      })
    );
    setCartTotal(cartTotal - product.price);
  };

  const removeAll = () => {
    setCurrentSale([]);
    setCartTotal(0);
  };

  
  console.log(cartTotal)
  

  return (
    <div className="App">
        <section className="container-header">
            <div className="container-title" onClick={realod}>
                <h1>Burguer
                    <span >Kenzie</span>
                </h1>
            </div>
            <div className="container-search">
                <input type="text" placeholder="Digitar pesquisa" pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$" title='Verifique o campo de busca'
               onChange={(e) => setUserInput(e.target.value) } value={userInput} />
            <button className="button" onClick={()=> showProducts(userInput)}>            
                <p className='text-button'>Pesquisar</p>                              
            </button>                 
            
            </div>
        </section>
        <main className="container-geral-main">            
            <CardsProducts products={ filteredProducts.length > 0 ? filteredProducts : products}
            handleClick={handleClick} />
          

          <div className="container-main-cart">
              <div className="container-title-cart">
                  <h2>Carrinho de compras</h2>
              </div>
              {cartTotal === 0? (
              <div className="container-description-cart">
                  <ul className="container-description-empty">
                      <li>
                        <h2>Sua Sacola está vazia</h2>
                      </li>
                      <li>
                        <p>adicione itens</p>
                      </li>                
                  </ul>                
              </div>
              ):(
                <div className="container-description-cart">
                {currentSale.map((el) => {
                  return (
                    <ShoppingCart key={el.id} RemoveClick={removeItem}   product={el} />
                  );
                })}

                <div className="container-value">
                  <p>
                    <span>Total</span>
                    <span>R$ {cartTotal.toFixed(2)}</span>
                  </p>
                  <div className="container-romove-all">
                    <button  onClick={() => removeAll()}>
                      <p>Remover todos</p>
                    </button>
                  </div>
                    
                </div>              
            </div>            
             
            )
          }
        </div>
        </main>
    </div>
  );
}

export default App