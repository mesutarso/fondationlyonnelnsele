import React from 'react'

function Newsletter() {
    return (
        <form className='flex'>
            <input type="email" name="email" id="email" placeholder='votre email' className='p-2 text-sm placeholder:text-text border bg-transparent' />
            <button className='bg-primary text-white text-sm p-2'>S&apos;inscrire</button>
        </form>
    )
}

export default Newsletter