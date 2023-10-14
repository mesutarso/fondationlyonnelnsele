'use client'
import { useMemo } from 'react'
import { RiTwitterXFill, RiInstagramFill, RiFacebookBoxFill, RiYoutubeFill, RiLinkedinFill } from 'react-icons/ri'

function Socials() {
    const socialsNetworks = useMemo(() => [
        {
            name: 'facebook',
            link: 'https://web.facebook.com/cfefrdc/?_rdc=1&_rdr',
            icon: <RiFacebookBoxFill size={"20px"} />
        },
        {
            name: 'twitter',
            link: 'https://twitter.com/DeCom_CFEF',
            icon: <RiTwitterXFill size={"20px"} />
        },
        {
            name: 'instagram',
            link: 'hhttps://www.instagram.com/cfefrdc/',
            icon: <RiInstagramFill size={"20px"} />
        },

        {
            name: 'youtube',
            link: 'https://www.youtube.com/@CFEF_RDC',
            icon: <RiYoutubeFill size={"20px"} />
        },
        {
            name: 'linkedin',
            link: 'hhttps://www.linkedin.com/in/cfefrdc/',
            icon: <RiLinkedinFill size={"20px"} />
        }
    ], [])

    return (
        <div className='flex items-center text-white gap-4'>
            {socialsNetworks.map((social, index) => (
                <a href={social.link} key={index} target='_blank' rel='noreferrer'>
                    {social.icon}
                </a>
            ))}
        </div>
    )
}

export default Socials