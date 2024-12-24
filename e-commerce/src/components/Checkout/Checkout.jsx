import { useCart } from "../../Context/Context"
import { useState } from "react"
import OrderForm from "../OrderForm/OrderForm"
import imgTraveler from "./assets/Traveler.png"
import classForm from "./Checkout.module.css"
import {
    collection,
    getDocs,
    where,
    query,
    documentId,
    writeBatch,
    addDoc,
} from "firebase/firestore";
import { useNotification } from "../../Notifications/Notifications"
import { db } from "../../fireBaseService/FireBase/firebaseConfig"
import Swal from 'sweetalert2'

const Checkout = () => {
    const [order, setOrder] = useState(null)
    const { cart, total } = useCart()
    const { showNotification } = useNotification()

    const createOrder = async (userData) => {
        try {
            const personalInfo = {
                user: userData,
                items: cart,
                total,
            }

            const batch = writeBatch(db)
            const outOfStock = []
            const documentPrevIds = cart.map((value) => value.id)
            const collectionOfArrays = query(
                collection(db, "listProducts"),
                where(documentId(), "in", documentPrevIds)
            )

            const snapshot = await getDocs(collectionOfArrays)
            const { docs } = snapshot;

            docs.forEach((info) => {
                const productData = info.data()
                const stockQuantity = productData.stock

                const productInCart = cart.find((product) => product.id === info.id)
                const productQuantityInCart = productInCart.total

                if (stockQuantity >= productQuantityInCart) {
                    batch.update(info.ref, { stock: stockQuantity - productQuantityInCart })
                } else {
                    outOfStock.push({ id: info.id, ...productData })
                }
            })

            if (outOfStock.length === 0) {
                batch.commit()
                const orderCollection = collection(db, "orders")
                const newOrderRef = await addDoc(orderCollection, personalInfo)
                setOrder(newOrderRef.id)

                Swal.fire({
                    position: "center",
                    icon: "success",
                    text: "Purchase successful!",
                    title: "We have successfully received your order, we will send you all the details by email, thank you very much for your purchase!!!!",
                    imageUrl: "https://marketplace.canva.com/EAFiV-phzPk/1/0/1600w/canva-tarjeta-gracias-por-tu-compra-moderno-3d-violeta-6aDuN3NLOgg.jpg",
                    imageWidth: 300,
                    imageHeight: 300,
                    showConfirmButton: true,

                })
            } else {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "there aren't products in stock",
                    showConfirmButton: false,
                    timer: 1200
                })
            }

        } catch (error) {
            console.error("Error creating order:", error)
        }
    }

    return (
        <div>
            <h1 className={classForm.h1}>Checkout</h1>
            <div className={classForm.containerForm}>
                <img src={imgTraveler} alt="img-Form" className={classForm.imgF} />
                <OrderForm onCreate={createOrder} /></div>
            {order && <h1 className={classForm.id}>Your order ID is: {order}</h1>}
        </div>
    )
}

export default Checkout
