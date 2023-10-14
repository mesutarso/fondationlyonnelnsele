'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

type Props = {
    label: string
    path: string
}



function Item({ label, path }: Props) {
    const pathname = usePathname()
    return (
        <li>
            <Link href={path}>
                <span className={`text-md capitalize ${pathname === path ? 'text-primary' : 'text-black'} font-semibold hover:text-primary `}>
                    {label}
                </span>
            </Link>
        </li>
    )
}

export default Item