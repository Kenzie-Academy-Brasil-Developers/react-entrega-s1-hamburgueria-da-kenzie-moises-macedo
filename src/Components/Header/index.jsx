import Button from "../Button"
import '../../Assests/Styles/Css/header.css';
import { useState, useEffect } from "react";


const Header = ({showProducts,inputValue}) => {   
    const [userInput, setUserInput] = useState("");

    const realod = () => {

        window.location.reload()

    }


    return (
        <section className="container-header">
            <div className="container-title" onClick={realod}>
                <h1>Burguer
                    <span >Kenzie</span>
                </h1>
            </div>
            <div className="container-search">
                <input type="text" placeholder="Digitar pesquisa" pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$" title='Verifique o campo de busca'
                onKeyDown={inputValue}  onChange={(e) => setUserInput(e.target.value) } value={userInput} />
            <button className="button" onClick={()=> showProducts(userInput)}>            
                <p className='text-button'>Pesquisar</p>                              
            </button>                 
            
            </div>
        </section>
    )    
}

export default Header
