"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Instrument {
  name: string;
  price: number;
  image_url: string;
  like: number;
  is_new: boolean;
}

const MusicItem: React.FC<{ instrument: Instrument }> = ({ instrument }) => {
const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden m-4 w-64"
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative">
        <motion.img 
          src={instrument.image_url} 
          alt={instrument.name}
          className="w-full h-48 object-cover"
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        />
        {instrument.is_new && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
            New
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{instrument.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xl font-semibold text-green-600">${instrument.price}</span>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span className="ml-1">{instrument.like}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function MusicStore() {
  const instruments: Instrument[] = [
    {
      name: "Fender Guitar",
      price: 300,
      image_url: "https://stuff.fendergarage.com/images/X/6/q/av2-shop-card-v3@2x.jpg",
      like: 20,
      is_new: true,
    },
    {
      name: "Gibson Les Paul",
      price: 1200,
      image_url: "https://tse1.mm.bing.net/th?id=OIP.RmDAKdCKcijfrDWaaeVLHQHaE8&pid=Api&P=0&h=180",
      like: 45,
      is_new: false,
    },
    {
      name: "Roland Keyboard",
      price: 650,
      image_url: "https://tse1.mm.bing.net/th?id=OIP.WsLX79x4vAhj2IjfJW84sQHaDt&pid=Api&P=0&h=180",
      like: 32,
      is_new: true,
    },
    {
      name: "Yamaha Acoustic",
      price: 450,
      image_url: "https://www.bhphotovideo.com/images/images2000x2000/yamaha_fg720s_acoustic_guitar_1100961.jpg",
      like: 28,
      is_new: false,
    },
    {
      name: "Pearl Drum Set",
      price: 890,
      image_url: "https://m.media-amazon.com/images/I/8186g7plXaL._SL1500_.jpg",
      like: 37,
      is_new: true,
    },
    {
      name: "Selmer Saxophone",
      price: 1100,
      image_url: "https://tse2.mm.bing.net/th?id=OIP.Wv4-UGguRDha269RsUnvfwHaHa&pid=Api&P=0&h=180",
      like: 41,
      is_new: false,
    },
    {
      name: "Ibanez Bass Guitar",
      price: 550,
      image_url: "https://tse4.mm.bing.net/th?id=OIP.gUes43B251AZOWJga_ZxVgHaEo&pid=Api&P=0&h=180",
      like: 29,
      is_new: true,
    },
    {
      name: "Martin Acoustic Guitar",
      price: 780,
      image_url: "https://cdn.shopify.com/s/files/1/0202/0250/products/1953-D-28-129518-front-close.jpg?v=1515524292",
      like: 33,
      is_new: false,
    },
    {
      name: "Shure Microphone",
      price: 120,
      image_url: "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742",
      like: 26,
      is_new: true,
    },
    {
      name: "Fender Amplifier",
      price: 220,
      image_url: "https://cdn.mos.cms.futurecdn.net/QjzUvYbutA22sdxGomu3U6-970-80.jpg.webp",
      like: 22,
      is_new: false,
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Music Instruments Store</h1>
        <div className="flex flex-wrap justify-center">
          {instruments.map((instrument, index) => (
            <MusicItem key={index} instrument={instrument} />
          ))}
        </div>
      </div>
    </div>
  );
}