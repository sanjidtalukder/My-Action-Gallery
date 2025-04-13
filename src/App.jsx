
import Banner from './Component/Banner/Banner';
import './App.css'
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';

import React, { useState } from 'react';
import { auctionItems } from './auctionData/auctionData';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [favorites,setFavorites]=useState([])
  
  const addToFavorites = (item) => {
    const alreadyAdded = favorites.find(fav => fav.id === item.id);
    if (!alreadyAdded) {
      setFavorites([...favorites,item]); 
      toast.success(`${item.title} added to favorites!`);
    }
  };

  
  const removeFromFavorites = (id) => {
    const item =favorites.find(fav =>id ===id)
    setFavorites(favorites.filter(item => item.id !== id));
    if (item) {
      toast.error(`${item.title} removed from favorites`);
    }
  };

  const totalBidAmount = favorites.reduce((sum, item) => sum + item.currentBidPrice, 0);
 
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    
    {/* Apps.jsx start here  */}
    <section>

    <div className="min-h-screen bg-[#e9f0f6] p-6  ">

      <div>
      <h2 className="text-xl font-semibold text-black">Active Auctions</h2>
    
    <p className="text-black mb-4">Discover and bid on extraordinary items</p>

      </div>

      <div className="max-w-7xl mx-auto flex    gap-6">

      
        <div className='w-[70%] '>
         
          {/* Table formate */}
          <div className="bg-white  rounded-xl text-black shadow  p-5">
            <table className="w-full text-black border-2 rounded-t-xl text-left">

              <thead className="text-black m-2 text-sm">

                <tr>
                  <th className="p-2">Items</th>
                  <th>Current Bid</th>
                  <th>Time Left</th>
                   <th>Bid Now</th>
                </tr>
              </thead>
            
            <tbody>
                
                   {auctionItems.map(item => {
                const isAlreadyFavorite = favorites.some(fav => fav.id === item.id);

            return (
              <tr key={item.id} className="border-2 hover:bg-gray-300">
            <td className="flex items-center gap-3 py-3">
            <img src={item.image} alt={item.title} className="w-12 h-12 m-2 object-cover rounded" />
              <span className='font-bold'>{item.title}</span>
            </td>
            <td className='font-bold text-[#0E2954] '>${item.currentBidPrice.toLocaleString()}</td>
            <td className='font-medium '>{item.timeLeft}</td>
            <td>
            <button
          onClick={() => addToFavorites(item)}
          disabled={isAlreadyFavorite}
          title={isAlreadyFavorite ? 'Already added to favorites' : 'Add to favorites'}
          className={`text-xl ${isAlreadyFavorite ? 'text-red-500 cursor-not-allowed' : 'text-gray-400 hover:text-red-700 cursor-pointer'}`}
        >
              <span><i className="fa-solid fa-heart"></i></span>
              </button>
                  </td>
                  </tr>
                 );
                })}

              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white w-[30%]  rounded-xl shadow p-4">
        <h2 className="text-xl text-[#0E2954] text-center font-extrabold mb-1 flex justify-center items-center gap-2">
  <span className="text-red-700 text-2xl">
    <i className="fa-solid fa-heart"></i>
  </span>
  Favorite Items
      </h2>

      <div className="flex justify-center mb-4">
              <hr className="w-58 border-t-2 border-[#0E2954]" />
            </div>

              {favorites.length === 0 ? (
            <div className="text-sm text-gray-500 text-center py-6">
              <p className='text-gray-700 font-extrabold'>No favorites yet</p>
              <p className='text-gray-600 font-bold'>Click the heart icon on any item to add it to your favorites</p>
            </div>
          ) : (
            <ul className="space-y-4"> 
            {favorites.map(item => (
           <li
                key={item.id}
           className="flex items-center justify-between p-4 bg-white border rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
           >
              <div className="flex items-center gap-4 flex-1 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-14 h-14 object-cover rounded-lg border"
        />
        <div className="text-left overflow-hidden">
          <p className="font-semibold text-base text-gray-800 truncate max-w-[200px]">
            {item.title}
          </p>
          <p className="text-sm text-gray-600 whitespace-nowrap">
            <span className="text-black font-bold">
              ${item.currentBidPrice.toLocaleString()}
            </span><br></br> &bull; {item.bidsCount} bids
          </p>
        </div>
      </div>
      <button
        onClick={() => removeFromFavorites(item.id)}
        className="text-black hover:text-red-700 transition"
        title="Remove"
      >
             <i className="fa-solid fa-xmark text-xl"></i>
            </button>
        </li>
       ))}
        </ul>
          )}
          <div className="mt-4 border-t pt-3 font-bold text-lg text-gray-600">
          Total bids Amount <span className="float-right font-bold text-black">${totalBidAmount.toLocaleString()}</span>

      </div>
      </div>
    </div>
    <ToastContainer position="top-right" autoClose={2000} />
    </div>
    
    </section>
    <Footer></Footer>
    </>
  )
}

export default App
