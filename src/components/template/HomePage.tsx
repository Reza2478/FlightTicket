import React from 'react'
import Search from '@/module/Search'

function HomePage() {
  return (
    <div className='flex flex-col max-w-[1000px] my-8 bg-blue-400 mx-auto focus:border-none'>

      <Search />
    </div>
  )
}

export default HomePage