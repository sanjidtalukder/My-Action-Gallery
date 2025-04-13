import React from 'react';


const Banner = () => {
    return (
        <section>
        <div
  className="h-[400px] bg-cover bg-center flex items-end px-6 pb-10 text-white"
  style={{ backgroundImage: `url(Banner-min.jpg)` }}
>
  <div>
    <h1 className="text-2xl font-bold mb-2">Bid on Unique Items from<br></br> Around the World</h1>
    <p className="mb-4">Discover rare collectibles, luxury goods, and vintage<br></br> treasures in our curated auctions</p>
    <button className="btn bg-white text-black">Responsive</button>
  </div>
</div>
      </section>
    );
};

export default Banner;