import React from "react";
import { useNavigate } from "react-router";
import Button from "components/UI/Button";

//Import styles and icons
import styles from "./cart.module.scss";
import IconCart from "assets/images/cart_2.svg";
import IconTrash from "assets/images/trash.svg";
import IconClose from "assets/images/close.svg";
import IconBack from "assets/images/arrow_back.svg";
import IconCartEmpty from "assets/images/cart_empty.svg";
import PizzaImg from "assets/images/pizzas/pizza_1.png";

function Cart() {
  let navigate = useNavigate();
  // const size = 26;
  // const thickness = "тонкое";

  return (
    <main className={styles.cart}>
      {/* <div className={styles.cartContent}>
        <div className={styles.inner}>
          <div className={styles.cartTop}>
            <h1 className={styles.cartTitle}>
              <img src={IconCart} alt="" />
              <span>Корзина</span>
            </h1>
            <button
              className={styles.cartClear}
              onClick={() => alert("Очистка...")}
            >
              <img src={IconTrash} alt="" />
              <span>Очистить корзину</span>
            </button>
          </div>
          <div className={styles.cartItems}>
            <div className={styles.cartItem}>
              <div className={styles.cartItemStart}>
                <img
                  src={PizzaImg}
                  className={styles.cartItemImg}
                  alt="Изображение пиццы"
                />
                <div className={styles.cartItemInfo}>
                  <h3 className={styles.cartItemName}>Чизбургер-пицца</h3>
                  <p className={styles.cartItemProperties}>
                    {thickness} тесто, {size} см.
                  </p>
                </div>
              </div>
              <div className={styles.cartItemCounter}></div>
              <div className={styles.cartItemPrice}>770 ₽</div>
              <button className={styles.cartItemRemove}>
                <img src={IconClose} alt="удалить" />
              </button>
            </div>
            <div className={styles.cartItem}>
              <div className={styles.cartItemStart}>
                <img
                  src={PizzaImg}
                  className={styles.cartItemImg}
                  alt="Изображение пиццы"
                />
                <div className={styles.cartItemInfo}>
                  <h3 className={styles.cartItemName}>Чизбургер-пицца</h3>
                  <p className={styles.cartItemProperties}>
                    {thickness} тесто, {size} см.
                  </p>
                </div>
              </div>
              <div className={styles.cartItemCounter}></div>
              <div className={styles.cartItemPrice}>770 ₽</div>
              <button className={styles.cartItemRemove}>
                <img src={IconClose} alt="удалить" />
              </button>
            </div>
            <div className={styles.cartItem}>
              <div className={styles.cartItemStart}>
                <img
                  src={PizzaImg}
                  className={styles.cartItemImg}
                  alt="Изображение пиццы"
                />
                <div className={styles.cartItemInfo}>
                  <h3 className={styles.cartItemName}>Чизбургер-пицца</h3>
                  <p className={styles.cartItemProperties}>
                    {thickness} тесто, {size} см.
                  </p>
                </div>
              </div>
              <div className={styles.cartItemCounter}></div>
              <div className={styles.cartItemPrice}>770 ₽</div>
              <button className={styles.cartItemRemove}>
                <img src={IconClose} alt="удалить" />
              </button>
            </div>
          </div>
          <div className={styles.cartTotal}>
            <div className={styles.cartTotalCount}>
              Всего пицц: <b>3 шт.</b>
            </div>
            <div className={styles.cartTotalPrice}>
              Сумма заказа: <b>900 ₽</b>
            </div>
          </div>
          <div className={styles.cartBottom}>
            <div
              onClick={() => {
                navigate(-1);
              }}
            >
              <Button className={styles.back}>
                <img src={IconBack} alt="" />
                <span>Вернуться назад</span>
              </Button>
            </div>
            <Button fill>Оплатить сейчас</Button>
          </div>
        </div>
      </div> */}
      <div className={styles.cartContentEmpty}>
        <div className={styles.emptyInner}>
          <h1 className={styles.emptyTitle}>Корзина пустая 😕</h1>
          <p className={styles.emptyText}>
            Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы
            заказать пиццу, перейди на главную страницу.
          </p>
          <img className={styles.emptyImg} src={IconCartEmpty} alt="" />
          <div
            onClick={() => {
              navigate(-1);
            }}
          >
            <Button className={styles.emptyBack}>
              <span>Вернуться назад</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
