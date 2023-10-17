import Image from 'next/image'
import Link from 'next/link'

type Props = {
    id: string
        title: string
        image: string,
        excerpt:string,
        slug :string
        category?:string
}

function Card({ title, excerpt, image, slug, category }: Props) {
    return (

        <div data-aos="zoom-in" className="card relative  ">
            <div className="card-image">
                <figure className="image relative w-full min-h-[250px] ">
                    <Image src={image} alt={title} fill sizes='100vw' className='aspect-auto object-fit rounded-t-md' />
                </figure>
            </div>
            <div className="card-content bg-white py-8 px-8 rounded-b-md">
                <div className="media">
                    <div className="media-content has-text-centered">
                        <h3 className="title text-xl font-bold mb-4 is-4">{title}</h3>
                    </div>
                </div>
                <div className="content text-sm text-text mb-4 line-clamp-4" dangerouslySetInnerHTML={{
                            __html: excerpt
                        }}>

                </div>
                <Link href={slug || '#'} className='px-4 lg:px-8 py-3 bg-primary text-white mx-auto rounded-md'>
                    <span className="button is-primary is-fullwidth">
                        <strong>En Savoir plus</strong>
                    </span>
                </Link>
            </div>
        </div>

    )
}

export default Card