import '../../Assests/Styles/Css/button.css'

const Button = ({button,icons,onClick, disabled, input}) => {
    

    return (
        <button className="button" onClick={onClick} >
            
            <p className='text-button'>{button}</p>
            <p className='icon-button'>{icons}</p>
            
        </button>
    )
}

export default Button