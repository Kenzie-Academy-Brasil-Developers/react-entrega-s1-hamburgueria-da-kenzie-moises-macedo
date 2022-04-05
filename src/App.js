import './App.css';
import Header from './Components/Header';
import CardsProducts from './Components/CardsProducts';
import { useState, useEffect } from "react";

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 14.00, img: 'https://i.ibb.co/fpVHnZL/hamburguer.png' },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 16.00, img: 'https://i.ibb.co/djbw6LV/x-burgue.png' },
    { id: 3, name: 'Big Kenzie', category: 'Sanduíches', price: 18.00, img: 'https://i.ibb.co/FYBKCwn/big-kenzie.png' },
    { id: 4, name: 'Fanta Guaraná', category: 'Bebidas', price: 5.00, img: 'https://i.ibb.co/cCjqmPM/fanta-guarana.png' },
    { id: 5, name: 'Coca-Cola', category: 'Bebidas', price: 4.99, img:'https://i.ibb.co/fxCGP7k/coca-cola.png' },
    { id: 6, name: 'Milkshake Ovomaltine', category: 'Bebidas', price: 4.99, img: 'https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png' },
  ]);

  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([products]);
  const [cartTotal, setCartTotal] = useState(0);

  
  

  const showProducts = (input) => {
    const filterProduct = products.filter((el) =>
      el.name.toLowerCase().includes(input.toLowerCase()) ||
      el.category.toLowerCase().includes(input.toLowerCase())
    );
    input !== ""
      ? setFilteredProducts([...filterProduct])
      : setFilteredProducts([...products]);
  };

  const onclick= (productId) => {
    const filterProduct = products.filter(
      (elemento) => elemento.id === productId
    );
    const [arrProd] = filterProduct;

    !currentSale.includes(arrProd) && setCurrentSale([...currentSale, arrProd]);
  };
  // const inputValue = (e) =>{
  //   if(e.keyCode === 13){
  //       const valuePress = e.target.value; 
  //       return valuePress       
        
  //   }
  // }
  

  const handleClick=(productId)=>{
   
    const selectedProd = products.find((elm)=>elm.id === productId)
    if(!currentSale.includes(selectedProd)){
      setCurrentSale([...currentSale, selectedProd])
    }
    
  }
 


  return (
    <div className="App">
      <Header  products={products} showProducts={showProducts}
        setProducts={setProducts}/>    
      <CardsProducts products={filteredProducts} onClick={onclick} handleClick={handleClick}/>
      
    </div>
  );
}

export default App;
