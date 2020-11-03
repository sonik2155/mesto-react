import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import {
    addPopupCards,
    addProfilePopup,
    addAvatarPopup
}
from '../utils/constants'
export default function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [showPopupImage, setShowPopupImage] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({
        isOpen: false
    });

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    };

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    };

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }

    function closeAllPopups() {
        setIsAddPlacePopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setShowPopupImage(false)
    }

    function handleCardClick(element) {
        setSelectedCard(element)
        setShowPopupImage(true)
    }
    return ( < div className = "page" > < Header / > < Main onEditProfile = {
            handleEditProfileClick
        }
        onAddPlace = {
            handleAddPlaceClick
        }
        onEditAvatar = {
            handleEditAvatarClick
        }
        onCardClick = {
            handleCardClick
        }
        / >  <
        Footer / > < ImagePopup card = {
            selectedCard
        }
        isOpen = {
            showPopupImage
        }
        onClose = {
            closeAllPopups
        }
        / >  < PopupWithForm name = 'add'
        isOpen = {
            isAddPlacePopupOpen
        }
        title = 'Новое место'
        onClose = {
            closeAllPopups
        }
        buttonTitle = 'Создать'
        children = {
            addPopupCards
        }
        / > < PopupWithForm name = 'profile'
        isOpen = {
            isEditProfilePopupOpen
        }
        title = 'Редактировать профиль'
        onClose = {
            closeAllPopups
        }
        buttonTitle = 'Сохранить'
        children = {
            addProfilePopup
        }
        / > < PopupWithForm name = 'avatar'
        isOpen = {
            isEditAvatarPopupOpen
        }
        title = 'Обновить аватар'
        onClose = {
            closeAllPopups
        }
        buttonTitle = 'Сохранить'
        children = {
            addAvatarPopup
        }
        / >   < PopupWithForm name = 'confirm'
        isOpen = {
            false
        }
        title = 'Вы уверены?'
        buttonTitle = 'Да' > < /PopupWithForm>  < /div>);
}