import React from 'react'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'


type Props = {
    data:{
       nombreDesMembres: string
         nombresDesActions: string
         nombresDesVolontaires: string
    }
}

function Stats({data}:Props) {
    return (
        <section data-aos='zoom-in' className=' mx-12 lg:mx-36 px-0   bg-white mt-[-100px]   lg:absolute z-20 rounded-md shadow-md lg:bottom-[-15%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className='p-12 '>
                <h3 className='text-3xl text-center font-bold mb-2 text-primary'>{data?.nombreDesMembres}</h3>
                <div className='mx-auto text-center h-1 w-1/4 bg-secondary mb-2'> </div>
                <p className='text-black text-sm text-center'>membres actifs</p>
            </div>
            <div className='p-12 '>
                <h3 className='text-3xl text-center font-bold mb-2 text-primary'>{data?.nombresDesVolontaires}</h3>
                <div className='mx-auto text-center h-1 w-1/4 bg-secondary mb-2'> </div>
                <p className='text-black text-sm text-center'>volontaires</p>
            </div>
            <div className='p-12 '>
                <h3 className='text-3xl text-center font-bold mb-2 text-primary'>{data?.nombresDesActions}</h3>
                <div className='mx-auto text-center h-1 w-1/4 bg-secondary mb-2'> </div>
                <p className='text-black text-sm text-center'>actions effectuées dans le milieux riraux</p>
            </div>
            <div className='p-12  bg-primary'>
                <div className=' text-center h-1 w-1/4 bg-secondary mb-3'> </div>
                <p className='text-sm text-white mb-4'>
                    &quot;La jeunesse est une energie qui ne demande qu&apos;à être canalisée&quot;
                </p>
                <div className="cta">
                    <Link href={'/adherer'} className='flex items-center gap-4'>
                        <span className='text-white  rounded-md font-semibold capitalize  hover:bg-primary hover:text-white transition duration-300 ease-in-out'>
                            Adhérer
                        </span>
                        <AiOutlineArrowRight className='text-white' />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Stats