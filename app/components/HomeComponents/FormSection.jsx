'use client'
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { FaUser } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Form = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('Username:', username);
        // console.log('Email:', email);
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 py-16 sm:py-20 md:py-24 s1100:py-28 w-full bg-white px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl s1100:text-5xl font-bold mb-3 sm:mb-4 text-center mx-auto w-full sm:w-4/5 md:w-3/5 s1100:w-2/5">
                Have what it takes to become A Professional Tipper
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-center mb-4 sm:mb-6 w-full sm:w-4/5 md:w-3/5 s1100:w-3/5 text-mainFont">
                You get a betting feature, you get a betting feature, everyone gets a betting feature! The Dabble app is stuffed
                with so many features, you ll be as entertained as a cat playing with a laser pointer.
            </p>
            <form onSubmit={handleSubmit} className="bg-white shadow-md shadow-gray-200/70 rounded-lg px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 pb-6 sm:pb-8 mb-4 flex flex-col items-center w-full max-w-3xl border border-SubDark_Color_3">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mx-auto py-2 sm:py-3 w-full">
                    {isClient ? (
                        <>
                            <div className="relative flex-grow">
                                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                                <Input
                                    type="text"
                                    placeholder="Username"
                                    className="py-3 sm:py-4 md:py-5 s1100:py-6 pl-10 sm:pl-12 w-full"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="relative flex-grow">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mainFont pointer-events-none" />
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    className="py-3 sm:py-4 md:py-5 s1100:py-6 pl-10 sm:pl-12 w-full"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="relative flex-grow h-10 sm:h-12 md:h-14 s1100:h-16"></div>
                            <div className="relative flex-grow h-10 sm:h-12 md:h-14 s1100:h-16"></div>
                        </>
                    )}
                    <Button className="bg-gradient-to-r from-purple-600/60 to-blue-500/60 text-white font-semibold py-3 sm:py-4 md:py-5 s1100:py-6 px-4 sm:px-6 md:px-8 s1100:px-10 mt-3 sm:mt-0 w-full sm:w-auto">
                        Get Started. Lets Tipping
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Form;