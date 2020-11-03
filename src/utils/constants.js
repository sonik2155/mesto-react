const addPopupCards = (
    <>
    <label className="popup__label"> 
                <input name="call" id='nickname' type="text" required autoComplete="off" minLength="1" maxLength="30" placeholder="Название" className="popup__form popup__form_name_title" /> 
                <span className="popup__error_visible" id="nickname-error"></span> 
                </label> 
                <label className="popup__label"> 
                <input name="link" id='url' type="url" required autoComplete="off" placeholder="Ссылка на картинку" className="popup__form popup__form_pic_url" /> 
                <span className="popup__error_visible" id="url-error"></span> 
                </label> 
    </>
);

const addProfilePopup = (
    <>
 <label className="popup__label"> 
                <input name="name" id='name' type="text"  defaultValue="" autoComplete="off" minLength="2" maxLength="40" required className="popup__form popup__form_name_call" /> 
                <span className="popup__error_visible" id="name-error"></span> 
            </label> 
                <label className="popup__label"> 
                <input name="info" id='text' type="text" defaultValue="" autoComplete="off" minLength="2" maxLength="200" required className="popup__form popup__form_job" /> 
                <span className="popup__error_visible" id="text-error"></span> 
                </label> 

    </>
);

const addAvatarPopup = (
<>
<label className="popup__label"> 
  <input name="picture" type="url" id="link" required placeholder="https://images.unsplash.com/photo-1599937749121-6d2b5063ea98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"  autoComplete="off" className="popup__form popup__apdate_picture"/> 
 </label> 
</>
    
);

export {addPopupCards, addProfilePopup, addAvatarPopup}