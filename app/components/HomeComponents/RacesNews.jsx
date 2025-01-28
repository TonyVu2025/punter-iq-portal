
import React from 'react';
import RaceCard from '@/components/HomeComponents/RaceCard';
import { raceNews } from '@/lib/data'
import { Button } from '../ui/button';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold my-16 mx-auto text-center">News from the Races</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {raceNews.slice(0, 6).map((news, index) => (
          <RaceCard key={index} {...news} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Button className="text-white bg-Font_SubColor_1 px-20 py-6 text-xl mb-16 cursor-pointer">
          Load More News
        </Button>
      </div>
    </div> 
  );
}  