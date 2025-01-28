"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

const ExoticsTable = ({ dividends }) => {
  const [exoticsData, setExoticsData] = useState([]);
  useEffect(() => {
    const exotics = dividends.filter((dividend) =>
      ["QUINELLA", "EXACTA", "TRIFECTA", "FIRST_FOUR"].includes(dividend.type),
    );
    setExoticsData(exotics);
  }, [dividends]);
  const getPositionSuffix = (position) => {
    if (position === 1) return "1st";
    if (position === 2) return "2nd";
    if (position === 3) return "3rd";
    return `${position}th`;
  };
  return (
    <div className="relative mt-10 border-b pb-20 max-lg:px-16 max-md:px-5">
      <div className="absolute left-0 top-0 flex w-full max-lg:px-20 max-md:px-5 lg:top-7 lg:w-20 lg:flex-col">
        <span className="ml-2 mr-2 mt-3 rounded-t bg-SubDark_Color_3 px-2 py-2 text-xs lg:mr-0 lg:mt-0 lg:rounded-l lg:px-4">
          Exotics
        </span>
        <span className="ml-2 mr-2 mt-3 rounded-t bg-SubDark_Color_3 px-2 py-2 text-xs lg:mr-0 lg:mt-20 lg:rounded-l lg:px-4">
          S-TAP
        </span>
        {/* <span className="ml-2 mr-2 mt-3 rounded-t bg-SubDark_Color_3 px-2 py-2 text-xs lg:mr-0 lg:mt-6 lg:rounded-l lg:px-4">
          NSW
        </span>
        <span className="ml-2 mr-2 mt-3 rounded-t bg-SubDark_Color_3 px-2 py-2 text-xs lg:mr-0 lg:mt-6 lg:rounded-l lg:px-4">
          Ubet
        </span> */}
      </div>
      <div className="grid grid-cols-1 gap-4 pt-16 max-md:px-0 sm:grid-cols-2 lg:grid-cols-4 lg:px-20 lg:pt-4">
        {exoticsData.map((item, index) => (
          <div
            key={index}
            className="rounded-lg bg-white px-4 py-4 shadow lg:pl-9"
          >
            <div className="mb-4 text-xl font-bold">{item.type}</div>
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  {item.dividendNumbers.map((place, placeIndex) => (
                    <TableHead
                      className="px-0 text-xs lg:text-sm"
                      key={placeIndex}
                    >
                      {getPositionSuffix(placeIndex + 1)}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* {category.rows.map((row, rowIndex) => ( */}
                <TableRow>
                  {item.dividendNumbers.map((place, pIndex) => (
                    <TableCell key={pIndex} className="p-0 px-0">
                      <div className="mr-1 w-6 rounded bg-gray-200 py-1 text-center text-xs text-Sub_Dark_color lg:mr-2 lg:w-10 lg:py-2 lg:text-sm">
                        {place}
                      </div>
                    </TableCell>
                  ))}
                  <TableCell className="text-right text-sm text-Sub_Dark_color lg:text-base">
                    ${item?.dividend}
                  </TableCell>
                </TableRow>
                {/* <TableRow>
                  <TableCell className="p-0 px-0">
                    <div className="mr-1 w-6 rounded bg-gray-200 py-1 text-center text-xs text-Sub_Dark_color lg:mr-2 lg:w-10 lg:py-2 lg:text-sm">
                      {" "}
                    </div>
                  </TableCell>

                  <TableCell className="text-right text-sm text-Sub_Dark_color lg:text-base">
                    {" "}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="p-0 px-0">
                    <div className="mr-1 w-6 rounded bg-gray-200 py-1 text-center text-xs text-Sub_Dark_color lg:mr-2 lg:w-10 lg:py-2 lg:text-sm">
                      {" "}
                    </div>
                  </TableCell>

                  <TableCell className="text-right text-sm text-Sub_Dark_color lg:text-base">
                    {" "}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="p-0 px-0">
                    <div className="mr-1 w-6 rounded bg-gray-200 py-1 text-center text-xs text-Sub_Dark_color lg:mr-2 lg:w-10 lg:py-2 lg:text-sm">
                      {" "}
                    </div>
                  </TableCell>

                  <TableCell className="text-right text-sm text-Sub_Dark_color lg:text-base">
                    {" "}
                  </TableCell>
                </TableRow> */}
              </TableBody>
            </Table>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ExoticsTable;
