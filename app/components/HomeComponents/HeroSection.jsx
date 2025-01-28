'use client'
import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FaUser } from 'react-icons/fa'
import Image from 'next/image';
import { Mail } from 'lucide-react';

const HeroSection = () => {
    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <section className="relative flex flex-col s1100:flex-row items-center bg-white py-16 md:py-24">
            <div className="w-full s1100:w-7/12">
                <div className='px-6 s1100:px-28'>
                    <p className="text-action_ll1 font-semibold  mb-2 text-lg text-start">+ Your Expert tools</p>
                    <h1 className="text-4xl sm:text-5xl s1100:text-7xl  font-bold leading-tight text-gray-900 mb-6">
                        Beat the Odds<br />
                        with Data-Driven<br />
                        Bets.
                    </h1>
                </div>
                <div className='border-t py-6 s1100:py-10 px-6 s1100:px-28'>
                    <p className="text-gray-700 text-base s1100:text-lg mb-6 s1100:mb-8">
                        You get a betting feature, you get a betting feature, everyone gets a betting feature! The Dabble app is stuffed with so many features, youll be as entertained as a cat playing with a laser pointer.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mx-auto">
                        {isClient ? (
                            <>
                                <div className="relative flex-grow">
                                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                                    <Input
                                        type="text"
                                        placeholder="Username"
                                        className="py-4 s1100:py-6 pl-12"
                                    />
                                </div>
                                <div className="relative flex-grow">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                                    <Input
                                        type="text"
                                        placeholder="Email"
                                        className="py-4 s1100:py-6 pl-12"
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="relative flex-grow h-10"></div>
                                <div className="relative flex-grow h-10"></div>
                            </>
                        )}
                        <Button className="bg-gradient-to-r from-purple-600/60 to-blue-500/60 text-white font-semibold hover:bg-blue-600 py-4 s1100:py-6 px-6 s1100:px-10">
                            Get Started
                        </Button>
                    </div>
                    <p className="text-gray-400 text-xs s1100:text-sm mt-4">
                        Get the best bet in Melbourne, delivered to your inbox every day.
                    </p>
                </div>
            </div>
            <div className="w-full s1100:w-4/12 flex justify-center mt-8 s1100:mt-0">
                <Image
                    src="/img/Frame (1).png"
                    alt="Racing"
                    width={900}
                    height={600}
                    className="scale-95 s1100:scale-125  s1100:scale-y-125 "
                />
            </div>
        </section>
    );
};

export default HeroSection;