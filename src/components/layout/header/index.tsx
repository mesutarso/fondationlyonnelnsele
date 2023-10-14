
import Socials from '@/components/shared/socials'
import Image from 'next/image';
import Menu from './menu';
import Link from 'next/link';
import {AiFillHeart} from 'react-icons/ai'

function Header() {
    return (
        <header className=''>

            <div className="h-[40px] relative bg-primary px-10 lg:px-36 text-white flex items-center justify-around  lg:justify-end">
                <div></div>
                <Socials />
                <Link href='/'>
                
                <Image src='/logo-fleg.svg' width={130} height={186} alt='logo' priority className='aspect-auto z-40 absolute top-0 left-5 lg:left-36' />
                </Link>
            </div>
            <div className="menu bg-white py-3 shadow-md flex items-center justify-around">
                <div></div>
                <div>
                    <Menu />
                </div>
                <div className='hidden lg:flex'>
                    <Link href={'/donations'} className='px-4 py-2 bg-secondary flex items-center gap-2 rounded-lg'>
                        <span>
                            Faire un don
                        </span>
                        <AiFillHeart className='text-primary' />
                    </Link>

                </div>
              
            </div>



        </header>
    )
}

export default Header