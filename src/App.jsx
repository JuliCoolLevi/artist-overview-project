import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Album from './components/albums/Album'

//image imports
import car_scroll from './assets/car_scroll.png' 



function App() {
  
  //makes a hook on getting the scrollY
  const [scrollY, setScrollY] = useState(0);

  //useEffect is used to always get the scroll of the user
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    //the window will always listen to scroll
    window.addEventListener('scroll', handleScroll);

    return () => {
      //once it retreives, it will remove it but it is still there
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>

    <img src={car_scroll} className='car'
      style={{ transform: `translate(-60%, ${scrollY*1.5}px)` }}
    />

      <Navbar />
    
      <Home />

      <Album />

    </>
  )
}

export default App
