import Button from "../Button";
import "../../Assests/Styles/Css/cardsProducts.css"
import ShoppingCart  from "../ShoppingCart";
import { useState } from "react";


const CardsProducts = ({products,onclick,active,handleClick}) => {   

    const [valor, setValor] = useState (true)

        

    return(
        <div className='container-main'>
            <div className="container-product">
                {products.map((el => {

                const {id, name, category, price, img} = el;

                return (
                <div key={id} className="container-card-product">
                    <div className="container-img">
                        <img src={img} alt={name}/>
                    </div>
                    <div className="container-geral-description">
                        <ul>
                            <li className="description-name">
                                <h2>{name}</h2>
                            </li>
                            <li className="description-category">
                                <p>{category}</p>
                            </li>
                            <li className="description-price">
                                <p>R$ {price}</p>
                            </li>
                            <li className="description-button">
                            <button className="button" onClick={()=> handleClick(products.id)}>           
                                <p className='text-button'>Adicionar</p>                                            
                            </button>
                            </li>
                        </ul>
                    </div>
                </div>
                )}))} 
            
            </div>

            {valor ? (<ShoppingCart/>):(
                <div className="container-product">
                {products.map((el => {

                const {id, name, category, price, img} = el;

                return (
                <div key={id} className="container-card-product">
                    <div className="container-img">
                        <img src={img} alt={name}/>
                    </div>
                    <div className="container-geral-description">
                        <ul>
                            <li className="description-name">
                                <h2>{name}</h2>
                            </li>
                            <li className="description-category">
                                <p>{category}</p>
                            </li>
                            <li className="description-price">
                                <p>R$ {price}</p>
                            </li>
                            <li className="description-button">
                            <button className="button" onClick={()=> console.log(id) }>           
                                <p className='text-button'>Adicionar</p>                                            
                            </button>
                            </li>
                        </ul>
                    </div>
                </div>
                )}))} 
            
            </div>

            )
            }            
        </div>
        
        
    )
}

export default CardsProducts