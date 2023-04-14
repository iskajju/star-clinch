import './App.css'
import ArtistSection from './components/ArtistSection';
import Header from './components/Header'
import Interested from './components/Interested';
import Profile from './components/Profile';

function App() {
  

  return (
    <>
    <Header />
    <div className='md:max-w-[720px] lg:max-w-[1140px] m-auto ' >

    <Profile />
    <ArtistSection />
    <Interested />

    </div>
    
    </>
  )
}

export default App
