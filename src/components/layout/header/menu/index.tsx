'use client'
import { useMemo } from "react"
import Item from "./item"
import { GiHamburgerMenu } from 'react-icons/gi'

function Menu() {
    const menu = useMemo(() => [
        {
            label: 'Accueil',
            path: '/'
        }, {
            label: 'Historique',
            path: '/historique'
        }, {
            label: 'Engagement',
            path: '/engagement'
        }, {
            label: 'Multimedia',
            path: '/multimedia'
        }, {
            label: 'news',
            path: '/news'
        }, {
            label: 'Contact',
            path: '/contact'
        },
    ]
        , []
    )
    return (
        <nav className="flex items-center justify-between">
            <ul className="hidden lg:flex items-center gap-4">
                {
                    menu.map((item: any, index: number) => (<Item key={index} {...item} />))
                }
            </ul>
            <div className="hamburger lg:hidden">

            <GiHamburgerMenu size='2em' className='text-primary' />
            </div>
        </nav>
    )
}

export default Menu