import { MagnifyingGlassPlus } from 'phosphor-react'

import './styles/main.css';

import logoImg from './assets/Logo.svg'
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

function App() {
  return (
     <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg}/>

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
        </h1>

        {/* div dos jogos */}
      <div className="grid grid-cols-6 gap-6 mt-16"> 
          <GameBanner bannerurl="/game-1.png" title="League of Legends" adsCount={5}/>
          <GameBanner bannerurl="/game-2.png" title="Dota 2" adsCount={2}/>
          <GameBanner bannerurl="/game-3.png" title="CS:GO" adsCount={1}/>
          <GameBanner bannerurl="/game-4.png" title="World of Warcraft" adsCount={5}/>
          <GameBanner bannerurl="/game-5.png" title="Apex" adsCount={3}/>
          <GameBanner bannerurl="/game-6.png" title="Fortnite" adsCount={7}/>
      </div>

     <CreateAdBanner />
    </div>
  )
}

export default App
