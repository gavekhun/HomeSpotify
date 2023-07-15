import { HomeIcon, Search, Library, ChevronLeft, ChevronRight, PlayIcon, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2, Circle } from 'lucide-react'
import { Play } from 'next/font/google'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">

      <div className="flex flex-1 "> 
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full' />
            <div className='w-3 h-3 bg-yellow-500 rounded-full' />
            <div className='w-3 h-3 bg-green-500 rounded-full' />
          </div>
          <nav className='space-y-5 mt-10'>
            <a href="" className="flex items-center gap-2 text-xs font-semibold text-zinc-200 hover:text-zinc-400">
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex itens-center gap-2 text-xs font-semibold text-zinc-200 hover:text-zinc-400'>
              <Search />
              Search
            </a>
            <a href="" className='flex itens-center gap-2 text-xs font-semibold text-zinc-200 hover:text-zinc-400'>
              <Library />
              Your library
            </a>
          </nav>
          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> Cry until I smiliedie </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> Opera Classics </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> Korean BL OST </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> シチュエーション </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> New Jeans </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> ANO NOVO EM ELDORADO </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> As mais tocadas no seu 2022 </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> Daily Mix 1 </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> Dia 9!! </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> yadokari </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> não sei não just vibes </a>


          </nav>

        </aside>
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
      <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className='flex items-center gap-3'>
          <Image src={"/album.jpg"} width={55} height={55} alt='Capa do album renaissance' />
          <div className='flex flex-col '>
            <a href='#' className='font-normal hover:underline'>THIQUE</a>
            <a href='#' className='text-xs text-zinc-400 hover:underline'>Beyoncé</a>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-200'/>
            <SkipBack size={20} className='text-zinc-200'/>
            <button  className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black '>
                <PlayIcon />
            </button>
            <SkipForward size={20} className='text-zinc-200'/>
            <Repeat size={20} className='text-zinc-200'/>
          </div>
          <div className='flex items-center gap-2 '>
            <span className='text-xs text-zinc-400'>1:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>            
              <div className='bg-zinc-200 group w-40 h-1 rounded-full hover:bg-green-500 '>                 
              </div>
              
              
            </div>
            <span className='text-xs text-zinc-400'>4:04</span>

          </div>


        </div>
        <div className='flex items-center gap-4'>
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className='flex items-center gap-2'>
            <Volume size={20}/>
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 w-10 h-1 rounded-full '></div>
            </div>
          </div>
          <Maximize2 size={20}/>


        </div>
      </footer>
    </div>
  )
}
