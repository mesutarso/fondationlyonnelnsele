'use client'
import { useEffect } from "react"
import Aos from 'aos'
import Header from "./header"
import Footer from "./footer"
import 'aos/dist/aos.css'

type Props = {
    children: React.ReactNode
}

function Layout({ children }: Props) {
    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: 'ease-in-out',
            once: false,
            
        })
    }, [])
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout