import Link from 'next/link'
import Item from './item'

type Props ={
    data:any
}

function Teams({data}:Props) {
    return (
        <section className='bg-gray-100 section'>
            <div className="container">
                <div data-aos="fade-in" className="header text-center">
                    <p className='text-primary text-sm mb-4'>Notre equipe</p>
                    <h2 className='text-2xl font-semibold mb-4'>
                        Au service de la communauté
                    </h2>
                    <div className='h-1 w-[80px] bg-secondary mx-auto mb-4'> </div>
                </div>
                <div className="members grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center my-8">
                    {
                        data.map((item:any, index:number) => (
                            <Item {...item} id={index} key={index} />
                        ))

                    }
                </div>
                <div data-aos="fade-in" className="cta flex justify-center ">
                    <Link href={'/mission'} className='px-8 py-3 bg-primary text-white mx-auto rounded-md'>
                        <span className="button is-primary is-fullwidth text-secondary">
                            <strong>Voir toute l&apos;equipe</strong>
                        </span>
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default Teams