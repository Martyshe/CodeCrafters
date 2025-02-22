import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { back } from "../../constants";
import HeaderWithBtn from "../headerForCategoriesAndSaleSections/HeaderWithBtn";
import styles from "./Cart.module.css";
import { useForm } from "react-hook-form";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../../redux/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <>
      <HeaderWithBtn headerText="Cart" btnText="Back to the store" path="/all-products" />
      <div className={styles.mainContainer}>
        <div className={styles.cardsContainer}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={`${back}${item.image}`} alt={item.title} />
              <div className="namePriceWrapper">
              <h3>{item.title}</h3>
              <p className={styles.price}>
                {item.originalPrice && <span className={styles.oldPrice}>${item.originalPrice}</span>} 
                ${item.price}
              </p>
              <div className={styles.quantityControls}>
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              </div>
              </div>
              
              <button className={styles.removeButton} onClick={() => dispatch(removeFromCart(item.id))}>
                X
              </button>
            </div>
          ))}
        </div>

        <div className={styles.formContainer}>
          <h2 className={styles.title}>Order details</h2>
          <p>{totalItems} items</p>
          <p>Total: <span>${totalPrice.toFixed(2)}</span></p>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <input className={styles.input} type="text" placeholder="Name" {...register("name", { required: "Name is required" })} />
            {errors.name && <p className={styles.error}>{errors.name.message}</p>}
            <input className={styles.input} type="tel" placeholder="Phone number" {...register("phone", { required: "Phone is required" })} />
            {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
            <input className={styles.input} type="email" placeholder="Email" {...register("email", { required: "Email is required" })} />
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
            <button type="submit" className={styles.button}>Order</button>
          </form>
        </div>
      </div>
    </>
  );
}
