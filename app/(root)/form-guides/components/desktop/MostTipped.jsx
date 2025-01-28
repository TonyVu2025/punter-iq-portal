import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Image from 'next/image';

const MostTipped = ({ data }) => {
    return (
        <div className="w-full overflow-x-auto">
            <Accordion type="single" collapsible className="w-full">
                {data.map((item, index) => (
                    <AccordionItem key={index} value={item}>
                        <AccordionTrigger 
                            iconClassName=" -rotate-90 group-data-[state=open]:rotate-180 transition-transform mx-1 sm:mx-2" 
                            className={`px-2 sm:px-4 py-2 sm:py-3 flex justify-between w-full hover:no-underline ${index == 0 ? 'border-t border-SubDark_Color_3' : ''}`}
                        >
                            <div className="flex items-center  flex-grow">
                                <div className="w-6 sm:w-10 flex-shrink-0">
                                    <Image src={item.img} width={30} height={60} alt="shirt" className=" h-auto"  />
                                </div>
                                <div className='flex flex-col min-w-0'>
                                    <span className="text-mainFont text-xs sm:text-sm font-bold truncate">{item.horse}</span>
                                    <span className='flex gap-1 text-xs'>
                                        <span className="text-Sub_Dark_color font-light truncate">{item.track}</span>
                                        <span className="text-Sub_Dark_color font-light truncate">• {item.race}</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col items-end ml-2 flex-shrink-0">
                                <span className='text-sm sm:text-base font-bold'>
                                    {item.price}
                                </span>
                                <span className='text-xs sm:text-sm font-light text-action1 whitespace-nowrap'>
                                    {item.tips} tips
                                </span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="overflow-x-hidden p-1 bg-SubDark_Color_3 border-t">
                            {item.items.map((it, ind) => (
                                <div
                                    key={ind}
                                    className={`flex items-center justify-between py-2 px-2 ${ind !== 0 ? 'border-t border-SubDark_Color_3' : ''}`}
                                >
                                    <div className="flex items-center space-x-2 sm:space-x-3 flex-grow min-w-0">
                                        <div className="w-7 sm:w-8 flex-shrink-0">
                                            <Image src='/img/shirt.png' width={30} height={60} alt="shirt" className="w-full h-auto" />
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                            <span className="text-xs sm:text-sm text-mainFont truncate">{it.title}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 sm:space-x-3 ml-2 flex-shrink-0">
                                        <span className="text-xs sm:text-sm text-action1 whitespace-nowrap">{it.tips}</span>
                                        <button className="rounded-lg bg-Font_SubColor_1 py-1 px-2 sm:py-2 sm:px-3 text-white text-xs sm:text-sm whitespace-nowrap">{it.price}</button>
                                    </div>
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default MostTipped