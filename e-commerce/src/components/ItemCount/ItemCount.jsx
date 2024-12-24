import { useState} from 'react'
import classItemCount from "./ItemCount.module.css"



const ItemCount = ({  stock, onAdd }) => {
    const [count, setCount] = useState(0)

    
    const decrement = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if(count < stock)
        setCount(count + 1)
    }



    return (
        <div>
            <h1 className={classItemCount.titleCount}>Products added: {count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={() => onAdd(count)} className={classItemCount.addToCart}>add to cart</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount