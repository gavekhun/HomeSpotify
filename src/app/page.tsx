import { Footer } from '@/components/footer'
import { Sidebar } from '@/components/sidebard'
import { HomeIcon, Search, Library, ChevronLeft, ChevronRight, PlayIcon, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2, Circle } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 ">         
      <Sidebar/>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>
          <h1 className='font-semibold  text-3xl m-4'> Good Afternoon!</h1>
          <div className='grid grid-cols-3 gap-6 mt-4'>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden  hover:bg-white/10 transition-colors '>
              <Image src={"/album.jpg"} width={100} height={100} alt='Capa do album renaissance' />
              <strong>Renaissance</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <PlayIcon />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden  hover:bg-white/10 transition-colors'>
              <Image src={"/album.jpg"} width={100} height={100} alt='Capa do album renaissance' />
              <strong>Renaissance</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <PlayIcon />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden  hover:bg-white/10 transition-colors'>
              <Image src={"/album.jpg"} width={100} height={100} alt='Capa do album renaissance' />
              <strong>Renaissance</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <PlayIcon />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden  hover:bg-white/10 transition-colors'>
              <Image src={"/album.jpg"} width={100} height={100} alt='Capa do album renaissance' />
              <strong>Renaissance</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <PlayIcon />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden  hover:bg-white/10 transition-colors'>
              <Image src={"/album.jpg"} width={100} height={100} alt='Capa do album renaissance' />
              <strong>Renaissance</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <PlayIcon />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden  hover:bg-white/10'>
              <Image src={"/album.jpg"} width={100} height={100} alt='Capa do album renaissance' />
              <strong>Renaissance</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <PlayIcon />
              </button>
            </a>
          </div>
          <h2 className='font-semibold  text-2xl m-5'> Made for Gave</h2>
          <div className='grid grid-cols-5 gap-4 mt-4'>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src={"/album.jpg"} className='w-full' width={100} height={100} alt='Capa do album renaissance' />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'> Beyoncé, Ari lennox, Katy Perry and more</span>

            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src={"/album.jpg"} className='w-full' width={100} height={100} alt='Capa do album renaissance' />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'> Beyoncé, Ari lennox, Katy Perry and more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src={"/album.jpg"} className='w-full' width={100} height={100} alt='Capa do album renaissance' />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'> Beyoncé, Ari lennox, Katy Perry and more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src={"/album.jpg"} className='w-full' width={100} height={100} alt='Capa do album renaissance' />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'> Beyoncé, Ari lennox, Katy Perry and more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src={"/album.jpg"} className='w-full' width={100} height={100} alt='Capa do album renaissance' />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'> Beyoncé, Ari lennox, Katy Perry and more</span>
            </a>

          </div>
        </main>

      </div>
      <Footer/>
    </div>
  )
}
