import '../../Assests/Styles/Css/cardsProducts.css'
import '../../Assests/Styles/Css/button.css'
import '../../Assests/Styles/Css/header.css'
import '../../Assests/Styles/Css/shoppingCart.css'


const Products = ({ product, handleClick }) => {

    return (
      
            
            <div key={product.id} className="container-card-product">
                    <div className="container-img">
                        <img src={product.img} alt={product.name}/>
                    </div>
                    <div className="container-geral-description">
                        <ul>
                            <li className="description-name">
                                <h2>{product.name}</h2>
                            </li>
                            <li className="description-category">
                                <p>{product.category}</p>
                            </li>
                            <li className="description-price">
                                <p>R$ {product.price.toFixed(2)}</p>
                            </li>
                            <li className="description-button">
                            <button className="button" onClick={()=> handleClick(product.id)}>           
                                <p className='text-button'>Adicionar</p>                                            
                            </button>
                            </li>
                        </ul>
                    </div>
                </div>                
            
    );
  };
  
  export default Products;