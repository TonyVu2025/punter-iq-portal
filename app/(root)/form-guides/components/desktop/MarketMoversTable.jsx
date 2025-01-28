import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const MarketTable = ({ data }) => {
    return (
        <Table className="bg-white rounded-lg w-full">
            <TableHeader className="bg-Subtle_dark_2">
                <TableRow>
                    <TableHead className="text-xs sm:text-sm text-Font_SubColor_1 h-8 sm:h-10 px-2 sm:px-4">Horse</TableHead>
                    <TableHead className="text-xs sm:text-sm text-Font_SubColor_1 h-8 sm:h-10 text-center px-2 sm:px-4">Open</TableHead>
                    <TableHead className="text-xs sm:text-sm text-Font_SubColor_1 h-8 sm:h-10 text-center px-2 sm:px-4">Current</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium px-4 max-sm:px-1 py-2 sm:py-3">
                            <div className="text-xs sm:text-sm flex flex-col">
                                <span className="truncate">
                                    {item.horse}
                                </span>
                                <span className="text-xs flex flex-wrap gap-1 items-center mt-1">
                                    <span className='text-Font_SubColor_1 truncate'>
                                        {item.track}
                                    </span>
                                    <span className='text-Font_SubColor_1 truncate'>
                                    • {item.race}
                                    </span>
                                </span>
                            </div>
                        </TableCell>

                        <TableCell className="text-center px-2 sm:px-4 py-2 sm:py-3 align-middle">
                            <div className='text-xs sm:text-sm text-Font_SubColor_1'>{item.open}</div>
                        </TableCell>
                        <TableCell className="text-center px-2 sm:px-4 py-2 sm:py-3 align-middle font-semibold">
                            <div className="text-xs sm:text-sm">{item.current}</div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default MarketTable;