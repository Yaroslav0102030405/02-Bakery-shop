import React, { useState } from 'react';
import './button.scss';

import { ReactComponent as IconClose } from '../../Icons/icon-close.svg';
import Modal from '../Modal/Modal';

const Button = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <button
        className="hero__button open-btn"
        type="button"
        onClick={() => setModalActive(true)}
      >
        Замовити дзвінок
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        {/* <div class="backdrop is-hidden">
          <div class="modal"> */}
        <button
          className="modal-btn-close"
          type="button"
          onClick={() => setModalActive(false)}
        >
          <IconClose />
        </button>
        <h2 className="modal-title">Замовити дзвінок</h2>
        <p className="modal-text">
          Залишіть заявку та наш спеціаліст зв'яжеться з Вами!
        </p>
        <form className="form" name="modal-form" autocomplete="on">
          <div className="form__field">
            <label class="form-label visually-hidden" for="user-name">
              Ім’я
            </label>
            <input
              className="form__input"
              type="text"
              id="user-name"
              name="user-name"
              placeholder="Ім’я"
              minlength="3"
              maxlength="20"
              required
            />
          </div>

          <div className="form__field">
            <label className="form__label visually-hidden" for="user-tel">
              Телефон
            </label>
            <input
              className="form__input"
              type="tel"
              id="user-tel"
              name="user-tel"
              placeholder="Телефон"
              pattern="^+[0-9]{12}"
              required
            />
          </div>

          <div className="form__field">
            <label className="form__label visually-hidden" for="user-email">
              Електронна пошта
            </label>
            <input
              className="form__input"
              type="email"
              id="user-email"
              name="user-email"
              placeholder="Електронна пошта"
              required
            />
          </div>

          <button className="button form__button" type="submit">
            Замовити дзвінок
          </button>

          <p className="form__terms">
            Натискаючи на кнопку я погоджуюсь з
            <a className="form__link" href="#">
              політикою конфіденційності
            </a>
          </p>
        </form>
        {/* </div>
        </div> */}
      </Modal>
    </>
  );
};

export default Button;
