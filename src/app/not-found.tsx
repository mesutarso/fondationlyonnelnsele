import Link from "next/link";

export default function NotFound() {
    return (
        <main className="my-32 w-full  flex justify-center font-mr">
        <div className="relative flex flex-col items-center justify-center">
        <h1 className={`inline-block text-dark 
      text-6xl font-bold w-full capitalize xl:text-8xl text-center`}>404</h1>
    <h2 className={`inline-block text-dark 
      text-5xl font-bold w-full capitalize xl:text-6xl text-center mt-4 tracking-wide leading-snug`}>Page Non Trouvée!</h2>
    <Link
    href="/"
    className="self-center mt-8 inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2
    font-semibold text-light hover:border-dark hover:bg-light hover:text-dark

    "
    >
        {/* eslint-disable-next-line react/no-unescaped-entities */}
    Revenir à l'accueil
    </Link>
    </div>
    </main>
);
}