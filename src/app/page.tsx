import { HomeIcon, Search, Library, ChevronLeft } from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col"> 
      
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'/>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'/>
            <div className='w-3 h-3 bg-green-500 rounded-full'/>
          </div>
          <nav className='space-y-5 mt-10'>
            <a href="" className="flex items-center gap-2 text-xs font-semibold text-zinc-200 hover:text-zinc-400">
              <HomeIcon/>
              Home
            </a>
            <a href="" className='flex itens-center gap-2 text-xs font-semibold text-zinc-200 hover:text-zinc-400'>
              <Search />
              Search
            </a>
            <a href="" className='flex itens-center gap-2 text-xs font-semibold text-zinc-200 hover:text-zinc-400'>
              <Library/>
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
            <button>
              <ChevronLeft/>

            </button>
          </div>
          main
        </main>

      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  )
}
