import React from 'react'
import Image from 'next/image'
import Logo from "@/public/images/780 logo.png"
import LogoMobile from "@/public/images/780 logo mobile.png"

function Header() {
    return (
        <div className='w-full h-14 bg-[#F3F3F3] md:bg-primary-100 shadow-md flex items-center justify-start px-5 md:px-24'>
            <Image src={Logo} width={100} height={100} alt='logo' className='hidden md:block' />
            <Image src={LogoMobile} width={70} height={70} alt='logo' className='md:hidden' />
        </div>
    )
}

export default Header