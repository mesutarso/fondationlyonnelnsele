import Image from "next/image"
import { getPlaiceholder } from "plaiceholder"


type Props = {

    src: string
    alt: string
    isFill?: boolean
    sizes?: string
    className?: string
    width?: number
    height?: number

}

async function RemoteImage({ src, alt, sizes,className,isFill,width,height, ...props }: Props) {
    const source = src || "https://administration.boussoledafrique.cd/wp-content/uploads/2023/01/icon.png"
    const buffer = await fetch(source).then(async (res) => {
        return Buffer.from(await res.arrayBuffer())
    })
    const { base64 } = await getPlaiceholder(buffer)
   if(isFill){
    return (
        <div className={`relative ${className}`}>
            <Image src={src} alt={alt} placeholder="blur" blurDataURL={base64} sizes={sizes}
        fill
        style={{
          objectFit: 'cover',
        }}{...props} />
        </div>
    )
   }
   else {
    return (
        <Image
            src={src}
            alt={alt}
            placeholder='blur'
            blurDataURL={base64}
            width={width}
            height={height}
            sizes={sizes}
            className={className}
           
        />
    )
   }
}

export default RemoteImage