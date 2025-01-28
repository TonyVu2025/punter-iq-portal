import React from "react";
import Image from "next/image";
import { CirclePlay, Clock2 } from "lucide-react";

const guides = [
    {
      id: 1,
      imageSrc: "/img/guide3.png",
      category: "Contenders",
      title: "Golden Sixty trials with sights on a third straight FWD Champions Mile",
      description: 'Childs has been the stable rider for trainer Grahame Begg for several seasons while the jockey has become a "go-to" rider for the Gai Waterhouse and Adrian Bott camp in recent...',
      timePosted: "3 hours ago",
    },
    {
      id: 2,
      imageSrc: "/img/guide2.png",
      category: "Contenders",
      title: "Golden Sixty trials with sights on a third straight FWD Champions Mile",
      description: 'Childs has been the stable rider for trainer Grahame Begg for several seasons while the jockey has become a "go-to" rider for the Gai Waterhouse and Adrian Bott camp in recent...',
      timePosted: "3 hours ago",
    },
    {
      id: 3,
      imageSrc: "/img/guide1.png",
      category: "Contenders",
      title: "Golden Sixty trials with sights on a third straight FWD Champions Mile",
      description: 'Childs has been the stable rider for trainer Grahame Begg for several seasons while the jockey has become a "go-to" rider for the Gai Waterhouse and Adrian Bott camp in recent...',
      timePosted: "3 hours ago",
    },
  ];

const HelpGuides = () => {
  return (
    <div className="bg-white p-10 rounded-xl my-10">
      <h2 className="text-2xl font-semibold my-4">Help Guides</h2>
      <div className="flex flex-col lg:flex-row gap-6">
        {guides.map((guide) => (
          <div key={guide.id} className="bg-white rounded-xl w-full lg:w-1/3 flex flex-col my-4 px-4">
            <div className="relative w-full h-52">
              <Image src={guide.imageSrc} layout="fill" objectFit="cover" className="rounded-xl" alt={guide.title} />
              <div className="absolute bottom-3 left-3 bg-white text-black p-2 py-1 rounded-xl text-xs z-20">
                {guide.category}
              </div>
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 hover:bg-opacity-50 rounded-xl px-4 text-white">
                <CirclePlay size={40} />
              </button>
            </div>
            <div className="py-4 flex flex-col justify-between flex-1">
              <div className="text-Font_SubColor_1 text-xs mb-2 flex items-center gap-1"><Clock2 size={10} /> {guide.timePosted}</div>
              <h3 className="text-lg font-semibold mb-2">{guide.title}</h3>
              <p className="text-mainFont text-sm ">{guide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpGuides;