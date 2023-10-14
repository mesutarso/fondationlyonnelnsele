import Image from "next/image"
import { RiTwitterXFill, RiInstagramFill, RiFacebookBoxFill, RiYoutubeFill, RiLinkedinFill } from 'react-icons/ri'



type ItemProps = {
    id:number
    image: string
    name: string
    job: string
    socials: {
        facebook: string
        twitter: string
        instagram: string
    }
}

function Item({id, image, name, job, socials }: ItemProps) {
    const delay = id 
    return (
        <div data-aos="fade-in" data-aos-delay={delay} className='flex flex-col justify-center items-center'>
            <div className="avatar rounded-full">
                <Image src={image} alt={name} width={150} height={150} className="rounded-full" />
            </div>
            <div className="meta-infos flex justify-center items-center flex-col mt-">
                <p className="my-2 text-xs text-primary">
                    {job}
                </p>
                <h3>
                    {name}
                </h3>
                <div className="socials flex items-center gap-2 my-2">

                    {
                        socials.facebook && (
                            <a href={socials.facebook} target="_blank" rel="noreferrer">
                                <RiFacebookBoxFill size={"20px"} className='text-primary' />
                            </a>
                        )
                    }
                    {
                        socials.twitter && (
                            <a href={socials.twitter} target="_blank" rel="noreferrer">
                                <RiTwitterXFill size={"20px"} className='text-primary' />
                            </a>
                        )


                    }
                    {
                        socials.instagram && (
                            <a href={socials.instagram} target="_blank" rel="noreferrer">
                                <RiInstagramFill size={"20px"} className='text-primary' />
                            </a>
                        )
                    }

                </div>

            </div>

        </div>
    )
}

export default Item