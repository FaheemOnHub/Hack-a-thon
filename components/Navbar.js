import React from "react"
import Header from "./Header"
export default function Navbar() {
    return (
        <nav>
            <Header/>
            <img src="../images/airbnb-logo.png" className="nav--logo" />
        </nav>
    )
}