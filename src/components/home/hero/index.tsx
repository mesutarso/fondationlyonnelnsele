'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import LocalImage from '@/components/images/local'

type SliderProps = {
    id?: string
    title: string
    image: string
    description: string
    slogan: string
}

function Hero({ id, title, image, description, slogan }: SliderProps) {
    return (
        <section className='relative w-full min-h-[700px] lg:h-[700px] '>
            <div>
                <Image src={image} fill sizes='100vw' alt='hero' className='object-cover aspect-auto' />
            </div>
            <div className='absolute bg-black/20 z-10 inset-0 flex flex-col justify-center section'>
                <div className="container section">
                    <motion.p initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }} className='lg:max-w-xl text-secondary text-xl mb-4'>
                        {slogan}
                    </motion.p>
                    <motion.h1 initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }} className='max-w-xl text-white text-3xl lg:text-5xl font-bold mb-4'>
                        {title}
                    </motion.h1>

                    <motion.div initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }} className="max-w-xl text-xs lg:text-sm before:content-[''] ml-3 before:left-[-15px] font-light text-white before:h-full  before:w-[2px]  before:absolute before:top-0 before: before:bg-orange relative mb-8"
                        dangerouslySetInnerHTML={{
                            __html: description
                        }}
                    >

                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }} className=''>
                        <Link href='/a-propos'>
                            <span className='bg-primary  text-white px-8 py-3 rounded-md font-semibold capitalize mt-10 hover:bg-white hover:text-orange transition duration-300 ease-in-out'>
                                En savoir plus
                            </span>
                        </Link>
                    </motion.div>


                </div>


            </div>
        </section>
    )
}

export default Hero