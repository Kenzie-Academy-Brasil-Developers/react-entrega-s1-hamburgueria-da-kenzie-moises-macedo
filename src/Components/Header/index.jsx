import Button from "../Button"
import { VscSearch } from "react-icons/vsc";
import '../../Assests/Styles/Css/header.css'


const Header = ({props}) => {


    return (
        <section className="container-header">
            <div className="container-title">
                <h1>Burguer
                    <span >Kenzie</span>
                </h1>
            </div>
            <form className="container-search">
                <input  type={'text'}placeholder="Digitar pesquisa" pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$" title='verfique'/>
                <Button button='Pesquisar' icons={''}/> 
            </form>
        </section>
    )    
}

export default Header
