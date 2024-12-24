import { useState, useEffect } from "react"
// import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import classDetail from "./ItemDetailContainer.module.css"
import sorryImgD from "./assets/sorry.png"
import { obtainById } from "../../fireBaseService/FireBase/fireStore/obtainProducts"


const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        if (product) {
            document.title = product.name
        }



        return () => {
            document.title = 'e-commerce'
        }
    }, [])

    useEffect(() => {
        setLoading(true)

        obtainById(id)
            .then(resolve => {
                if (resolve) {
                    setProduct(resolve)
                } else  {
                    setProduct(null)
                }

            }, otherErr => console.warn(otherErr))
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return <h1>loading products...</h1>
    }

    if( product === null){
        return  <h1 className={classDetail.notExist}>this product not exist <img src={sorryImgD} alt="icon" className={classDetail.igmSorry} /> </h1>
    }

    return (
        <div className={classDetail.containerInfo}>
            <h1 className={classDetail.titleDetail}>Detail of product</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer