import CartWidget from "../CartWidget/CartWidget"
import classNav from "./NavBar.module.css"
import { Link } from "react-router-dom"
const NavBar = () => {
    return (
        <>
            <header className={classNav.navBar}>
                <nav className={"navbar navbar-expand-lg"}>
                    <div className={`container-fluid ${classNav.containerNav}`}>
                        <Link to="/" className={`navbar-brand ${classNav.title}`} >THENORTHPOLE</Link>
                        <div className={`collapse navbar-collapse`} id="navbarNav">
                            <ul className={`navbar-nav ${classNav.listNav}`}>
                                <li className={classNav.li}>
                                    <Link to="/category/middle-backPack" className={classNav.link}>middle backPack</Link>
                                </li>
                                <li className={classNav.li}>
                                    <Link to="/category/backPack" className={classNav.link}>backPack</Link>
                                </li>
                                <li className={classNav.li}>
                                    <Link to="/category/Big-backPack" className={classNav.link}>Big backPack</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <CartWidget></CartWidget>
            </header>
        </>
    )
}
export default NavBar