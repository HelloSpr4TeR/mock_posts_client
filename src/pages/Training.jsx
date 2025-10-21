import React, { useMemo, useState } from "react";
import { Cart } from "../components/FruitsTaskCase/Cart";
import { FRUITS, PRODUCTS } from "../components/FruitsTaskCase/constants";
import '../components/FruitsTaskCase/fruits.css'

export default function Training() {
  const [isChecked, setIsChecked] = useState(false)

  const uniqueProd = useMemo(() => {
    const map = new Map()

    for (const item of PRODUCTS) {
      if (!map.has(item.name)) {
        map.set(item.name, item)
      } else {
        map.set(item.name, {
          ...map.get(item.name),
          price: map.get(item.name).price + item.price,
          count: map.get(item.name).count + item.count
        })
      }
    }

    return Array.from(map.values())
  }, [PRODUCTS])

  const fruits = uniqueProd.filter(product => FRUITS.includes(product.name))

  const productsArr = !isChecked ? uniqueProd : fruits

  const countPrice = productsArr.reduce((acc, { count, price }) => {
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
        {productsArr.map((product, idx) => (
          <Cart key={idx}
            name={product.name}
            price={product.price}
            count={product.count} />
        ))}
      </div>
    </div>
  );
}