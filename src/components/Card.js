import Trash from '../images/Trash.svg';
import like from '../images/like.svg'

function Card(props) {
    function handleClick() {
        props.onCardOpen(props.element);
    }

    return ( <
        >
        <
        img className = "element__pic"
        onClick = { handleClick }
        src = { props.element.link }
        alt = { props.element.name }
        />  <
        div className = "element__container" >
        <
        button type = "button"
        className = "element__delete" > < img src = { Trash }
        alt = "Кнопка" / > < /button>  <
        h2 className = "element__title" > { props.element.name } < /h2>  <
        div className = "element__like-zone" >
        <
        button type = "button"
        className = "element__like" > < img src = { like }
        alt = "Лайк" / > < /button>  <
        span className = "element__quantity-like" > { props.element.likes.length } < /span>  < /
        div > <
        /div>  < /
        >
    )
}

export default Card;