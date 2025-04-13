import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-white text-base-content rounded p-10">
            <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl">
            <span className="text-blue-700">Auction</span>
            <span className="text-yellow-300">Gallery</span>
          </a>
        </div>

        <div className="flex justify-around gap-6  text-black font-bold">
          <a href="#" className="hover:text-blue-600">Bid.</a>
          <a href="#" className="hover:text-blue-600">Win.</a>
          <a href="#" className="hover:text-blue-600">Own.</a>
        </div>


        <div className="flex justify-around gap-6  text-black font-bold">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Auctions</a>
          <a href="#" className="hover:text-blue-600">Categories</a>
          <a href="#" className="hover:text-blue-600">How to works</a>
        </div>
  <aside>
    <p className=' text-black font-bold'>Copyright © {new Date().getFullYear()}AuctionHub. All rights reserved.</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;