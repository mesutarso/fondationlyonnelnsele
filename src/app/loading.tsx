import Image from 'next/image'


export default function Loading() {

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="animate-pulse relative h-20 w-40 rounded-full">
                <Image src={"/logo-fleg.svg"} fill alt="logo loader" />
            </div>
        </div>
    )

}