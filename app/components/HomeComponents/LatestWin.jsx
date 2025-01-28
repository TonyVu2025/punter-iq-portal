import React from 'react'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Image from 'next/image'

const LatestWin = () => {
    return (
        <div className='flex flex-col w-full py-32 px-40 min-h-screen'>

            {/* firt part */}

            <div className='min-w-full flex justify-between items-center mb-10'>
                <h1 className='text-2xl font-bold'>Latest Win</h1>
                <Button className="bg-Font_SubColor_1">
                    View More <Plus size={15} className='mx-1' />
                </Button>
            </div>

            {/* second part */}

            <div className='w-full flex gap-5'>
                <div className='w-1/3 bg-slate-600 h-'>
                    a
                </div>
                <div className='w-1/3 bg-slate-200'>
                    a
                </div>
                <div className='w-1/3 h-96  flex flex-col gap-5 '>
                    <div className='bg-gradient-to-b from-violet-700 to-violet-500 rounded-lg text-white h-1/2 flex flex-col items-center justify-center'>
                        <span>Beat the Odds</span>
                        <span className='text-2xl'>Unlock Your Potential</span>
                    </div>
                    <div className='bg-gradient-to-b from-violet-700 to-violet-500 rounded-lg text-white h-1/2 flex flex-col items-center justify-center'>
                        <span>Beat the Odds</span>
                        <span className='text-2xl'>Unlock Your Potential</span>
                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-r from-action1 to-action2 my-10 rounded-xl h-40 p-0'>
                <div
                    className='w-full min-h-full flex rounded-lg items-center'
                    style={{
                        backgroundImage: "url('/img/sun.png')",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right center',
                        backgroundSize: '20%'
                    }}
                >
                    <div className='w-1/3 flex items-center justify-center'>
                        <Image width={200} height={100} src={'/img/lastleftr.png'} alt='logo' />
                    </div>
                    <div className='w-2/3 flex flex-col justify-center h-full'>
                        <p className='text-white text-xl'>Your Unfair Advantage on the Punt</p>
                        <p className='text-white flex items-baseline font-bold text-4xl gap-2'>
                            Save the Best for the Last on
                            <span className="relative top-2">
                                <Image width={120} height={80} src={'/img/lastleftr.png'} alt='logo' />
                            </span>
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default LatestWin