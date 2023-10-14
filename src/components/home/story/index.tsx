import Image from "next/image"
import Link from "next/link"
import { BsFillCheckCircleFill } from 'react-icons/bs'

function Story() {
    return (
        <section className='container section bg-white'>
            <div className="pt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div data-aos="fade-right"
                >

                    <Image src={'/story.svg'} width={520} height={560} alt='story' />
                </div>
                <div data-aos="fade-left"
                    className="flex flex-col justify-around">
                    <p className="text-primary text-md mb-4">Historique</p>
                    <h2 className="text-black font-bold text-3xl mb-2">
                        VOULOIR est la voie qui mène à la réussite.
                    </h2>
                    <div className='text-center h-1 w-[50px] bg-orange mb-4'> </div>
                    <p className="text-sm text-text mb-4">
                        La Fondation Lyon EL NSELE se concentre essentiellement sur l’accompagnement de la jeunesse, estimant que l’avenir de la nation congolaise en dépend. Cependant, pour y parvenir, elle doit développer des valeurs qui lui permettent de faire partie des élites.
                    </p>
                    <ul className="grid gap-4 mb-8">
                        <li>
                            <div className="icons flex items-center gap-6">
                                <BsFillCheckCircleFill size='2em' className='text-primary' />
                                <span>
                                    Soutenir les personnes dans le besoin extrême
                                </span>
                            </div>


                        </li>
                        <li>
                            <div className="icons flex items-center gap-6">
                                <BsFillCheckCircleFill size='2em' className='text-primary' />
                                <span>
                                    Accompagner la jeunesse...
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className="icons flex items-center gap-6">
                                <BsFillCheckCircleFill size='2em' className='text-primary' />
                                <span>
                                    Faire du monde un meilleur endroit
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className="icons flex items-center gap-6">
                                <BsFillCheckCircleFill size='2em' className='text-primary' />
                                <span>
                                    Partagez votre amour pour la communauté
                                </span>
                            </div>
                        </li>
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