import Item from "../Item/Item"
import classItemList from "./ItemList.module.css"
const ItemList = ({ products }) => {
    return(
        <div className={classItemList.containerP} >
            {
                products.map(products => {
                    return (
                        <Item key={products.id} {...products}/>
                    )
                })
            }
        </div> 
    )
}

export default ItemList

