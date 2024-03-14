import React from 'react'
import LoadingGif from "@/public/images/loading.gif"
import Image from 'next/image'

function Loading() {
    return (
        <div className='flex items-center justify-center h-screen'>
            <Image src={LoadingGif} alt='loading' />
        </div>
    )
}

export default Loading