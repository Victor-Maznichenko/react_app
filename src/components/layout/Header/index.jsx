import React from 'react'
import styles from "./header.module.scss";

//Import Icons
import IconLogo from 'assets/images/logo.svg'
import IconCart from 'assets/images/cart.svg'
import Button from 'components/UI/Button';

function Header() {
    const totalPrice = 520;

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.logo}>
                        <div className={styles.logoImg}>
                            <img src={IconLogo} alt="Logo" />
                        </div>
                        <div className={styles.logoText}>
                            <h4 className={styles.logoTitle}>REACT PIZZA</h4>
                            <p className={styles.logoDescr + ' grey'}>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                    <Button fill className={styles.purchase}>
                        <div className={styles.purchasePrice}>
                            <span>{totalPrice}</span> ₽
                        </div>
                        <span className={styles.purchaseCart}>
                            <img src={IconCart} alt="Cart icon" />
                            <span>3</span>
                        </span>
                    </Button>
                </div>
            </div>
        </header>

    )
}

export default Header