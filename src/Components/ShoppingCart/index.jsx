const ShoppingCart = ({ product, RemoveClick }) => {
  return (
    <div className="description-cart-add">
      <div>
        <img src={product.img} alt={product.name}/>
        <h3>{product.name}
          <p>{product.category}</p>
        </h3>
      </div>       
      <button onClick={() => RemoveClick(product)}>Remover</button>
    </div>
  );
};

export default ShoppingCart;