import Image from 'next/image'
import Link from 'next/link'
import { FaCalendarDays } from 'react-icons/fa6'

type Props = {
    title: string
    excerpt: string
    image: string
    date: string
    categorie: string
    slug: string
}

function Card({ title, excerpt, image, date, categorie, slug }: Props) {
    return (

        <Link href={slug}>
            <article data-aos="zoom-in" className=''>
                <div className="image relative">
                    <Image src={image} alt={title} width={400} height={300} className='rounded-md' />
                    <div className="meta flex justify-between items-center bg-white px-4 py-2 w-[95%] rounded-md absolute bottom-[-20px] ">
                        <p className='text-xs flex gap-2 items-center text-primary'> <FaCalendarDays className='text-secondary' /> {date}</p>

                    </div>
                    <p className='text-sm absolute px-4 py-2 bg-primary text-white rounded-md top-5 right-5'>{categorie}</p>
                </div>
                <div className="content mt-[30px]">

                    <h4 className='text-xl font-semibold mb-2 line-clamp-2'>{title}</h4>
                    <div className='text-sm text-text font-normal mb-2 line-clamp-4' dangerouslySetInnerHTML={{
                        __html: excerpt
                    }} />

                </div>
            </article>
        </Link>

    )
}

export default Card