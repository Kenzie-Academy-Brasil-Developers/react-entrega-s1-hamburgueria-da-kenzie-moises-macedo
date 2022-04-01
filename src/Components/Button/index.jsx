import '../../Assests/Styles/Css/button.css'

const Button = ({button,icons}) => {

    return (
        <button className="button">
            
            <p className='text-button'>{button}</p>
            <p className='icon-button'>{icons}</p>
            
        </button>
    )
}

export default Button