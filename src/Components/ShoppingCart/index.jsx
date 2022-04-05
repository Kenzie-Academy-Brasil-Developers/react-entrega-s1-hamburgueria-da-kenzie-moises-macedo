import "../../Assests/Styles/Css/shoppingCart.css"

const ShoppingCart = () => {

    return(
        <div className="container-main-cart">
            <div className="container-title-cart">
                <h2>Carrinho de compras</h2>
            </div>
            <div className="container-description-cart">
                <ul className="container-description-empty">
                    <li><h2>Sua Sacola está vazia</h2></li>
                    <li><p>adicione itens</p></li>                
                </ul>                
            </div>
        </div>
    )
}

export default ShoppingCart