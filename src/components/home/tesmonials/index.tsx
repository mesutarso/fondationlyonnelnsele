'use client'
import { useState, useMemo } from 'react'
import Image from "next/image"
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

const items = [
    {
        temoignage: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l&apos;imprimerie depuis les années 1500',
        image: '/tesmony.svg',
        personne: {
            nom: 'mechack Tambwe Loleka',
            image: '/vice.svg',
            position: 'Fullstack developer'
        }

    },
    {
        temoignage: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l&apos;imprimerie depuis les années 1500',
        image: '/mission.svg',
        personne: {
            nom: 'Lyon el Nsele',
            image: '/vice.svg',
            position: 'Fullstack developer'
        }

    }
]

type Props = {
    data: any
}

function Tesmonial({ data }: Props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeSlide = useMemo(() => data && data[activeIndex], [activeIndex, data])

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };
    return (
        <section className='container my-20 section'>

            <div className='flex flex-col-reverse lg:flex-row justify-end items-center gap-0 relative'>
                <div data-aos="zoom-in" className='w-[90%] lg:w-1/2  lg:absolute lg:left-0 z-10 bg-white rounded-md shadow-md border p-8 lg:h-[300px]'>
                    <p className='text-primary text-sm mb-4'>Temoignage</p>
                    <h2 className='text-2xl font-semibold mb-4'>
                        Ce que les gens disent de notre fondation
                    </h2>
                    <div className='h-1 w-1/4 bg-secondary mb-4'> </div>
                    <div className='text-text text-sm mb-10' dangerouslySetInnerHTML={{
                        __html: activeSlide?.temoignage
                    }}>

                    </div>
                    <div className="testimonial flex items-center justify-between">
                        <div className='flex gap-3 items-center'>
                            <div className={"avatar"}>
                                <Image src={activeSlide?.personne?.image} width={40} height={40} sizes='100vw' alt='avatar' className="rounded-full" />
                            </div>
                            <div>
                                <h3 className='text-xs '>
                                    {activeSlide?.personne?.nom}
                                </h3>
                                <p className='text-xs  text-primary'>
                                    {activeSlide?.personne?.position}
                                </p>
                            </div>
                        </div>
                        <div className={'slider-btn flex items-center gap-4'}>
                            <button onClick={handlePrev}>
                                <BsFillArrowLeftCircleFill size='2em' className={'text-text hover:text-secondary hover:bg-primary rounded-full'} />
                            </button>
                            <button onClick={handleNext}>
                                <BsFillArrowRightCircleFill size='2em' className={'text-text hover:text-secondary hover:bg-primary rounded-full'} />
                            </button>

                        </div>

                    </div>

                </div>
                <div data-aos="fade-left" className="images relative w-[90%] lg:w-2/3 flex  h-[300px] lg:h-[400px] justify-end items-start">

                    <Image src={activeSlide?.image} fill sizes='100vw' alt='testmony images' className="object-cover lg:object-contain" />
                    <Image src='/heart.svg' width={100} height={100} sizes='100vw' alt='testmony images' className="object-fit" />


                </div>
            </div>

        </section>
    )
}

export default Tesmonial