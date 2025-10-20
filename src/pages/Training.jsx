import React, { useMemo, useState } from "react";
import { Cart } from "../components/FruitsTaskCase/Cart";
import { FRUITS, PRODUCTS } from "../components/FruitsTaskCase/constants";
import '../components/FruitsTaskCase/fruits.css'

export default function Training() {
  const [isChecked, setIsChecked] = useState(false)

  const fruits = useMemo(() => {
    return PRODUCTS.filter(product => FRUITS.includes(product.name))
  }, [])

  const countPrice = (!isChecked ? PRODUCTS : fruits).reduce((acc, { count, price }) => {
    acc.count += count
    acc.price += price
    return acc
  }, { count: 0, price: 0 })

  return (
    <div className="wrapper">
      <div>
        <label style={{ cursor: 'pointer' }}>
          <input
            style={{ display: "none" }}
            type="checkbox"
            id="isFruit"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)} />
          {!isChecked ? <span>
            Показывать только фрукты
          </span> :
            <span>Показать все</span>}
        </label>
      </div>
      <div>
        Общее количество: <span>{countPrice.count}</span>
      </div>
      <div>
        Общая цена: <span>{countPrice.price}</span>
      </div>
      <div>Список продуктов:</div>
      <div className="cart-wrapper">
        {(!isChecked ? PRODUCTS : fruits).map(product => (
          <Cart key={product.name}
            name={product.name}
            price={product.price}
            count={product.count} />
        ))}
      </div>
    </div>
  );
}