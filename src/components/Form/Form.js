import React from 'react';
import './form.scss';
import Button from './../Button/Button';

const Form = () => {
  return (
    <>
      <h2 className="contact__title section__title">
        Приєднуйся до мережі пекарень
      </h2>
      <p className="contact__text">Заповни форму, щоб ми звʼязались з тобою!</p>

      <form className="form" name="form" autocomplete="on">
        <div className="form__field">
          <label className="form__label visually-hidden" for="user-name">
            Ім’я
          </label>
          <input
            className="form__input"
            type="text"
            id="user-name"
            name="user-name"
            placeholder="Ім’я"
            required
          />
        </div>

        <div className="form__field">
          <label className="form-label visually-hidden" for="user-tel">
            Телефон
          </label>
          <input
            className="form__input"
            type="tel"
            id="user-name"
            name="user-tel"
            placeholder="Телефон"
            required
          />
        </div>

        <div className="form__field">
          <label className="form-label visually-hidden" for="user-email">
            Електронна пошта
          </label>
          <input
            className="form__input"
            type="email"
            id="user-name"
            name="user-email"
            placeholder="Електронна пошта"
            required
          />
        </div>

        {/* <button className="button form__button" type="submit">
          Замовити дзвінок
        </button> */}
        <Button />
        <p className="form__terms">
          Натискаючи на кнопку я погоджуюсь з
          <a className="form__link" href="#">
            політикою конфіденційності
          </a>
        </p>
      </form>
    </>
  );
};

export default Form;
