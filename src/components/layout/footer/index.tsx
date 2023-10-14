import Image from 'next/image'
import Link from 'next/link'
import Socials from '@/components/shared/socials'
import { menu } from '@/lib/constants'
import Item from '@/components/layout/header/menu/item'
import ContactInfo from './contact'
import Newsletter from './newsletter'

function Footer() {
  return (
    <footer className='bg-footer'>
      <div className='section container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        <div className="logo-infos">
          <div className="logo mb-5">
            <Link href='/' >
              <Image src='/logo-fleg.svg' width={130} height={186} alt='logo' priority className='aspect-auto' />
            </Link>
          </div>

          <p className='text-text text-sm font-normal mb-5'>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l&apos;imprimerie depuis les années 1500
          </p>
          <Socials />
        </div>
        <div className="usefuls">
          <h3 className='text-md font-semibold mb-5'>
            Liens
          </h3>
          <ul className='flex flex-col gap-2'>
            {menu.map((item: any, index: number) => <Item {...item} key={index} />)}
          </ul>

        </div>
        <div className="contact">
          <h3 className='text-md font-semibold mb-5'>
            Contacts
          </h3>
          <div>
            <ContactInfo />
          </div>
        </div>
        <div className="usefuls">
          <h3 className='text-md font-semibold mb-5'>
            Abonnez-vous à notre newsletter
          </h3>
          <p className='text-text text-sm mb-5'>
            Inscrivez vous à notre newsletter pour recevoir les dernières actualités et les offres spéciales directement dans votre boîte de réception.
          </p>
          <Newsletter />
        </div>

      </div>
      <div className='py-3 flex items-center justify-center bg-primary text-white text-sm'>
        <p >Fondation Lyon EL Nsele © 2023. Tous droits résérvés</p>
      </div>
    </footer>
  )
}

export default Footer