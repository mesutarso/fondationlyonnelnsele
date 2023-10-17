
import Card from './card'

type Props = {
    data : any
}

function Articles({data}:Props) {
    return (
        <section className="section bg-gray-100 ">
            <div className="container">
                <div className="header text-center">
                    <p data-aos="fade-in" className='text-primary text-sm mb-4'>De notre expérience</p>
                    <h2 data-aos="fade-in" className='text-2xl font-semibold mb-4'>
                        Nouvelles et articles
                    </h2>
                    <div data-aos="fade-in" className='h-1 w-[80px] bg-secondary mx-auto mb-4'> </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                    {
                        data?.map((article: any, index: number) => (
                            <Card key={index} {...article} />
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Articles