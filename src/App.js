import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import ItemCard from './components/item-card';
import LaptopImg from './assets/imgs/Imagelaptop.png'

function App() {
  return (
    <div className="App max-w-[1400px] mx-auto px-3 ">
      {/* Header */}
      <Navbar />
      <Hero />
      <div className='border border-b border-border   drop-shadow rounded-lg p-4'>
        <div className='flex justify-between  border-b border-border py-4 items-center'>
          <p className='font-semibold'>Featured Items</p>
          <div className='border border-b border-border   rounded-lg px-2 p-1 flex items-center w-fit sm:mt-0 mt-3'>
            <span className='text-xs whitespace-nowrap  p-1'>View Auction</span>
          </div>
        </div>
        <div className='grid gap-4 mt-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2'>
          {'fake array'.split('').map((item,key)=>(
          <ItemCard key={key} img={LaptopImg} name="Koray Okumus" title="Apple MacBook Air 13 M1 Chip 8GB 256GB 2020 Model - Rose Gold"/>

          ))}

        </div>
      </div>

    </div>
  );
}

export default App;
