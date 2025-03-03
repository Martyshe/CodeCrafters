import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { back } from "../../constants";
import HeaderWithBtn from "../headerForCategoriesAndSaleSections/HeaderWithBtn";
import styles from "./Cart.module.css";
import { useForm } from "react-hook-form";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart
} from "../../redux/cartSlice";

const SuccessModal = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.successModal}>
        <button className={styles.closeButton} onClick={onClose}>
          x
        </button>
        <h3 className={styles.modalTitle}>Congratulations</h3>
        <p className={styles.modalText}>
          Your order has been successfully placed on the website.
          <br /> <br />
          A manager will contact you shortly to confirm your order.
        </p>
      </div>
    </div>
  );
};

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const totalUniqueItems = cartItems.length;
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    setShowSuccessModal(true);
    reset();
    dispatch(clearCart()); // Очищаем корзину
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigate("/"); 
  };

  const emptyCart = cartItems.length === 0;

  return (
    <>
      <HeaderWithBtn
        headerText="Shopping cart"
        btnText="Back to the store"
        path="/all-products"
      />

      {showSuccessModal && <SuccessModal onClose={handleCloseModal} />}

      {emptyCart ? (
        <div className={styles.emptyCart}>
          <p>Looks like you have no items in your basket currently.</p>
          <button className={styles.continueShopping} onClick={() => navigate("/all-products")}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className={styles.mainContainer}>
          <div className={styles.cardsContainer}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={`${back}${item.image}`} alt={item.title} />
                <div className={styles.itemDetails}>
                  <h3>
                    {item.title.length > 20
                      ? `${item.title.slice(0, 20)}...`
                      : item.title}
                  </h3>

                  <div className={styles.controlsPriceContainer}>
                    <div className={styles.quantityControls}>
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                      >
                        -
                      </button>
                      <span className={styles.quantities}>{item.quantity}</span>
                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                      >
                        +
                      </button>
                    </div>
                    <div className={styles.priceContainer}>
                      <span className={styles.currentPrice}>${item.price}</span>
                      {item.originalPrice &&
                        item.originalPrice > item.price && (
                          <span className={styles.oldPrice}>
                            ${item.originalPrice}
                          </span>
                        )}
                    </div>
                  </div>
                </div>
                <button
                  className={styles.removeButton}
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  X
                </button>
              </div>
            ))}
          </div>

          <div className={styles.formContainer}>
            <h2 className={styles.title}>Order details</h2>
            <p>{totalUniqueItems} items</p>
            <div className={styles.priceWrapper}>
              <p>Total: </p>
              <span className={styles.totalPrise}>
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <input
                className={styles.input}
                type="text"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className={styles.error}>{errors.name.message}</p>
              )}
              <input
                className={styles.input}
                type="tel"
                placeholder="Phone number"
                {...register("phone", { required: "Phone is required" })}
              />
              {errors.phone && (
                <p className={styles.error}>{errors.phone.message}</p>
              )}
              <input
                className={styles.input}
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className={styles.error}>{errors.email.message}</p>
              )}
              <button type="submit" className={styles.button}>
                Order
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}