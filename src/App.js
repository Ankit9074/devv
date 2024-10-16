import './App.css';
import Cart from './component/cart';
import CardList from './component/cardList'
import SideBar from './component/SideBar';
import { useState } from 'react';
function App() {

  const [view, setView] = useState('cardList');
  console.log("view --- ", view);

  return (
    <div className="App">
      <div className='sideBar shadow  flex'>
        <SideBar setView={setView} view={view} />
      </div>
      <div className='cardContainer pt-50 '>
        {
          view == "cart"
            ? <Cart />
            : <CardList />
        }
      </div>
    </div>
  );
}

export default App;
