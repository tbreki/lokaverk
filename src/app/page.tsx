import Image from 'next/image'
import Link from 'next/link'
import CalendarGfg from './book'


export default function Home() {
  return (
    
    
    <main>

<nav className="flex sm:justify-center space-x-4">
  {[
    ['Home', '/page'],
    ['Order', '/team'],
    ['Contact', '/projects'],
    ['Book', '/book'],
  ].map(([title, url]) => (
    
    <a href={url}className="rounded-lg px-3 py-2 text-maingreen font-medium hover:bg-maingreen hover:text-mainred">{title}</a>
    
  ))}
 
    </nav>
    
    <h1 className='flex place-content-center text-3xl text-maingreen font-bold m-10 '>WELCOME TO LIL'BITS</h1>
    
    <div className=' bg-maingreen height-50% mt-10'> 
   

   <div className='flex place-content-center'>
   <Image
      src="/logo.png"
      width={500}
      height={500}
      alt="logo"
    />
   </div>
    </div>
  
  
  
  </main>
  )
}
