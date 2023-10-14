import Modal from "@/components/home/mission/modal"
import Link from 'next/link'
import List from "./list"


function Mission() {
    return (
        <div className="container section flex flex-col lg:flex-row items-center justify-between gap-16 ">
            <div data-aos="fade-right" className='w-full lg:w-1/3'>
                <p className='text-primary text-sm mb-4'>Notre mission et nos objectifs</p>
                <h2 className='text-2xl font-semibold mb-4'>
                    Vivre, c’est être au service de la communauté.
                </h2>
                <div className='h-1 w-1/4 bg-secondary mb-4'> </div>
                <p className='text-text text-sm mb-10'>Nous nous sommes engagés avec la population pour résoudre les problèmes liés à la salubrité, à l’accès à l’eau potable, à l’électricité, à l’aménagement de la voirie dans les quartiers et à l’encadrement des mamans maraîchères et vendeuses de pains... »</p>
                <div className="cta ">
                    <Link href={'/mission'} className='px-8 py-3 bg-primary text-white mx-auto rounded-md'>
                        <span className="button is-primary is-fullwidth">
                            <strong>En Savoir plus</strong>
                        </span>
                    </Link>
                </div>
            </div>
            <div data-aos="fade-in" className='w-full lg:w-1/3'>
                <Modal />
            </div>
            <div data-aos="fade-left" className='w-full lg:w-1/3'>
                <List />
            </div>

        </div>
    )
}

export default Mission