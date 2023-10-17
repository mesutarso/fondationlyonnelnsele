import Card from './card'

type Props = {
    data :{
        id: string
        title: string
        image: string,
        excerpt:string,
        slug :string
        category?:string
    }[]
}

function Action({data}:Props) {
    return (
        <section className='section bg-primary'>
            <div className="container">
                <p data-aos="fade-in"
                    className='text-white text-center mb-4'>Nos engagements</p>
                <h2 data-aos="fade-in" className='text-secondary text-3xl text-center font-semibold mb-4'>Nos Actions</h2>
                <div data-aos="fade-in" className='mx-auto text-center h-1 w-[100px] bg-secondary mb-2'> </div>
                <div data-aos="fade-in" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                    {
                        data?.map((action: any, index: number) => (
                            <Card key={index}  {...action} />
                        ))

                    }

                </div>
            </div>
        </section>
    )
}

export default Action