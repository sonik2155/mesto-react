import React from 'react';
import Pencil from '../images/Pencil.svg';
import Plus from '../images/plus.svg';
import {api} from '../utils/Api';
import Card from './Card';

 function Main(props) {
    const [userName, setUserName] = React.useState('user');
    const [userDescription, setUserDescription  ] = React.useState('description');
    const [userAvatar, setUserAvatar] = React.useState('avatar');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([ 
            api.getUserInformation(), 
            api.getInitialCards() 
        ]) 
        .then(([userData, item]) => {  
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
            setCards(item)
    })
},[])
 
    return (
        <main className="main"> 
        <section className="profile"> 
            <div className="profile__zone" style={{ backgroundImage: `url(${userAvatar})` }} >
                <button type="button" onClick={props.onEditAvatar} className="profile__avatar-button"><img className="profile__pencil-img" src={Pencil}/></button> 
            </div> 
            <div className="profile__info-container"> 
                <div className="profile__container"> 
    <h1 className="profile__info-title">{userName}</h1> 
                    <button type="button" onClick={props.onEditProfile} className="profile__edit-button"></button> 
                </div> 
                <p className="profile__info-profession">{userDescription}</p> 
            </div> 

            <button type="button" onClick={props.onAddPlace} className="profile__add-button"><img className="profile__plus-img" src={Plus} alt="Кнопка" /></button> 
        </section> 

        <section className="elements"> 
    <ul className="element">
    {cards.map((card, i) => (
            <li className="element__card" key={card._id}>
              <Card element={card} onCardOpen={props.onCardClick} />
            </li>
    ))}
        </ul> 
        </section> 
    </main> 
    )
}

export default Main;