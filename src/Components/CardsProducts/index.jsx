import Product from "../Products";

const CardsProducts = ({ products, handleClick }) => {
  return (
    <div className='container-main'>        
        {products.map((product) => {
            return <Product key={product.id} product={product} handleClick={handleClick}/>;
        })}
    </div>
  );
};

export default CardsProducts