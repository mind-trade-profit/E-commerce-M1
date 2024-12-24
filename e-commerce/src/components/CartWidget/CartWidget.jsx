import cartImg from './assets/Cart.png'
import { useCart } from '../../Context/Context'
import { Link } from 'react-router-dom'


const CartWidget = () => {

    const { totalQuantity } = useCart()

   
    return (
        <div>
            <Link to="/cart"><img src={cartImg}/></Link>
            <span>{totalQuantity}</span>
        </div>
    )
}

export default CartWidget