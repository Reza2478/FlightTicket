import React from 'react'
import Image from 'next/image'
import Logo from "@/public/images/780 logo.png"

function Header() {
    return (

        <div className='w-full h-14 bg-primary-100 shadow-sm flex items-center justify-start px-24'>
            <Image src={Logo} width={100} height={100} alt='logo' />

        </div>
    )
}

export default Header