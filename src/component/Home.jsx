import React from 'react'
import Cart from './cart'
import CardList from './cardList'
import SideBar from './SideBar';
import { useState } from 'react';
function Home() {
  
  const [view, setView] = useState('cardList');
  return (
    <>
     <div className='w-[40%] min-h-screen shadow-[12px_0px_30px_3px_rgb(192,189,189)]
  flex'>
        <SideBar setView={setView} view={view} />
      </div>
      <div className='cardContainer pt-50 '>
        {
          view === "cart"
            ? <Cart />
            : <CardList />
        }
      </div>
    </>
  )
}

export default Home