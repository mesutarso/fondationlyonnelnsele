import Image from "next/image"
import Link from "next/link"
import { BsFillCheckCircleFill } from 'react-icons/bs'
import RemoteImage from '@/components/images/remote'

type Props = {
    data : any
}

function Story({data}:Props)  {
    return (
        <section className='container section bg-white'>
            <div className="pt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
                
                <div data-aos="fade-right" 
                >
                    <RemoteImage isFill={false} width={520} height={560} src={data.image.sourceUrl}  alt='story' />
                </div>
                <div data-aos="fade-left"
                    className="flex flex-col justify-around">
                    <p className="text-primary text-md mb-4">{data.slogan}</p>
                    <h2 className="text-black font-bold text-3xl mb-2">
                       {data.titre}
                    </h2>
                    <div className='text-center h-1 w-[50px] bg-orange mb-4'> </div>
                    <p className="text-sm text-text mb-4">
                    {data.description}
                    </p>
                    <ul className="grid gap-4 mb-8">
                        {
                            data.onglets.map((item:any,index:number)=>{
                                ( <li key={index}>
                                    <div className="icons flex items-center gap-6">
                                        <BsFillCheckCircleFill size='2em' className='text-primary' />
                                        <span>
                                           {item.title}
                                        </span>
                                    </div>
        
        
                                </li>)
                            })
                        }
                        
                    </ul>
                    <div className=''>
                        <Link href='/a-propos'>
                            <span className='bg-primary  text-white px-8 py-3 rounded-md font-semibold capitalize mt-10 hover:bg-white hover:text-orange transition duration-300 ease-in-out'>
                                En savoir plus
                            </span>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Story