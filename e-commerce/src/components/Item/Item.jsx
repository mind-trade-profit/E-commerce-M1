import { Link } from "react-router-dom"
import classItem from "./Item.module.css"


const Item = ({ id, name, img, category, price,stock}) => {
    return (
        <div className={classItem.containerTags}>
            <h2>{name}</h2>
            <img src={img} className={classItem.imgP} />
            <p>Category : {category}</p>
            <span>Total Stock : <strong className={classItem.stockI}>{stock}</strong></span>
            <h4>$ {price} USD</h4>
            <Link to={`/detail/${id}`} className={classItem.viewDetail}>Vie Detail</Link>
        </div>  
    )
}


export default Item