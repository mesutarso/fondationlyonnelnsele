import Image from "next/image"
import Link from "next/link"

type Props ={
    data:{
        title?:string
        image:string
        fichier : string
    }
}

function Magazine({data}:Props) {
    return (
        <section className='py-48 lg:py-12 bg-primary relative '>
            <div className="container flex  lg:justify-center">
                <div data-aos="zoom-in" className="absolute top-20 lg:top-[-20px] left-[-10%]  lg:left-0 ">
                    <Image src={data?.image} alt='derniere parution' width={380} height={428} className="object-contain left-0" />
                </div>
                <div data-aos="fade-in" className="header pt-72 text-center lg:text-left lg:pt-0 ">
                    <p data-aos="fade-in" className='text-white text-sm mb-4'> Derniere parution </p>
                    <h2 data-aos="fade-in" className='text-2xl font-semibold mb-8 text-white'>
                        VOULOIR Magazine, disponible <br /> en papier et digital
                    </h2>
                    <div className='h-1 w-[80px] bg-secondary mx-auto lg:mx-0  mb-8'> </div>
                    <div data-aos="fade-in" className="cta flex justify-center lg:justify-start ">
                        <a href={data?.fichier} download target='_blank' rel='noopenner' className='px-8 py-3 bg-secondary text-white  rounded-md'>
                            <span className="button is-primary is-fullwidth text-primary">
                                <strong>Télécharger</strong>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Magazine