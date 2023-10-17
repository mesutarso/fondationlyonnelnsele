import Modal from "@/components/home/mission/modal"
import Link from 'next/link'
import List from "./list"

type Props = {
    data: any
}


function Mission({ data }: Props) {
    return (
        <div className="container section flex flex-col lg:flex-row items-center justify-between gap-16 ">
            <div data-aos="fade-right" className='w-full lg:w-1/3'>
                <p className='text-primary text-sm mb-4'>{data?.slogan}</p>
                <h2 className='text-2xl font-semibold mb-4'>
                    {data?.titre}
                </h2>
                <div className='h-1 w-1/4 bg-secondary mb-4'> </div>
                <div className='text-text text-sm mb-10' dangerouslySetInnerHTML={{
                    __html: data?.description
                }}></div>
                <div className="cta ">
                    <Link href={'/mission'} className='px-8 py-3 bg-primary text-white mx-auto rounded-md'>
                        <span className="button is-primary is-fullwidth">
                            <strong>En Savoir plus</strong>
                        </span>
                    </Link>
                </div>
            </div>
            <div data-aos="fade-in" className='w-full lg:w-1/3'>
                <Modal video={data?.video} />
            </div>
            <div data-aos="fade-left" className='w-full lg:w-1/3'>
                <List data={data?.objectifs} />
            </div>

        </div>
    )
}

export default Mission