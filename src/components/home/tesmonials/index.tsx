import Image from "next/image"

function Tesmonial() {
    return (
        <section className='container my-20 section flex flex-col-reverse lg:flex-row justify-end items-center gap-0 relative'>
            <div data-aos="zoom-in" className='w-[90%] lg:w-1/2  lg:absolute lg:left-0 z-10 bg-white rounded-md shadow-md border p-8 lg:h-[300px]'>
                <p className='text-primary text-sm mb-4'>Temoignage</p>
                <h2 className='text-2xl font-semibold mb-4'>
                    Ce que les gens disent de notre fondation
                </h2>
                <div className='h-1 w-1/4 bg-secondary mb-4'> </div>
                <p className='text-text text-sm mb-10'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l&apos;imprimerie depuis les années 1500</p>

            </div>
            <div data-aos="fade-left" className="images relative w-[90%] lg:w-2/3 flex  h-[300px] lg:h-[400px] justify-end items-start">

                <Image src='/tesmony.svg' fill sizes='100vw' alt='testmony images' className="object-cover lg:object-contain" />
                <Image src='/heart.svg' width={100} height={100} sizes='100vw' alt='testmony images' className="object-fit" />


            </div>
        </section>
    )
}

export default Tesmonial