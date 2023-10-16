import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'
import fs from 'node:fs/promises'


type Props = {

    src: string
    alt: string
    isFill?: boolean
    sizes?: string
    className?: string
    width?: number
    height?: number
    quality?: number

}
async function LocalImage({ src, alt, sizes, className, quality, width, height, isFill }: Props) {


    const buffer = await fs.readFile(`/public${src}`)

    const { base64 } = await getPlaiceholder(buffer)

    if (isFill) {
        return (
            <Image
                src={src}
                alt={alt}
                placeholder='blur'
                blurDataURL={base64}
                fill
                objectFit='cover'
                sizes={sizes}
                className={className}
                quality={quality || 90}
            />
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
                quality={quality || 90}
            />
        )
    }


}

export default LocalImage