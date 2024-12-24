import { useState, useEffect } from "react"
// import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import classItemC from "./ItemListContainer.module.css"
import { obtainProducts } from "../../fireBaseService/FireBase/fireStore/obtainProducts"

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const { category } = useParams()

    useEffect(() => {
        if (category) document.title = 'e-commerce: ' + category

        return () => {
            document.title = 'e-commerce'
        }
    })
    //obtaining the product to firebase
    useEffect(() => {
        setLoading(true)
        //link category id with the dataBase
        obtainProducts(category)
            .then(resolve => {
                setProducts(resolve)
            }, otherErr => console.warn(otherErr))
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false)
            })
    }, [category])


    if (loading) {
        return <h1>Loading products...</h1>
    }
    // } else if (!loading) {
    //     console.error("any problem ocurred in setLoading products")
    // }

    return (
        <div className={classItemC.containerItem}>
            <h1 className={classItemC.h1} >Products</h1>
            <h2 className={classItemC.subtitle}>UP TO 50% OFF</h2>
            <div className={classItemC.containerProducts}>
                <ItemList products={products} />
            </div>
        </div>
    )
}

export default ItemListContainer