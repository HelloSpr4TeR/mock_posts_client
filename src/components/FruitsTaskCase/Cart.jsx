import React, { memo } from "react";


export const Cart = memo(({ name, price, count }) => {
    return (
        <div className="cart">
            <div className="cart-item">
                <p>Название:</p> <p>{name}</p>
            </div>
            <div className="cart-item">
                <p>Сумма:</p> <p>{price}</p>
            </div>
            <div className="cart-item">
                <p>Количество:</p> <p>{count}</p>
            </div>
        </div>
    );
})