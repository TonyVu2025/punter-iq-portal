import React from "react";
import Image from "next/image";
import { Trophy, SquareChevronDown } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

const FormOverviewRaceCard = ({
  position,
  color,
  horseName,
  horseDetails,
  trainer,
  jockey,
  weight,
  margin,
  stab,
  imageUrl,
}) => {
  return (
    <div className="relative my-4 flex flex-col rounded-lg border bg-white 1440px:flex-row">
      <div className="flex flex-col items-center justify-between py-2 max-lg:justify-center lg:flex-row 1440px:w-8/12">
        <div
          className={`absolute bottom-1/3 left-0 top-1/2 flex h-12 w-28 -translate-y-1/2 items-center justify-center gap-2 rounded-r-3xl text-white max-lg:top-24 bg-${color}`}
        >
          <Trophy size={30} />
          <span className="text-xl">{position}</span>
        </div>

        <div className="my-5 ml-8 flex items-start gap-2">
          <Image
            src={imageUrl}
            width={50}
            height={50}
            alt="Jersey"
            className="mx-4"
          />
          <div className="flex flex-col items-start justify-center gap-1">
            <span className="text-2xl font-semibold text-mainFont">
              {horseName}
            </span>
            <span className="text-sm text-Font_SubColor_1">{horseDetails}</span>
            <button className="mt-2 flex items-center justify-center gap-1 rounded bg-black px-4 py-2 text-sm font-light text-white">
              <SquareChevronDown size={20} /> Add to Blackbook
            </button>
          </div>
        </div>
        <div className="flex w-1/2 flex-col items-center justify-around max-lg:w-full mobile-l:flex-row">
          <ul className="flex w-1/2 flex-col justify-center">
            <li className="flex w-full justify-between gap-4">
              <span className="w-1/3 text-sm">Trainer</span>
              <span className="w-2/3 text-sm text-Font_SubColor_1">
                {trainer}
              </span>
            </li>
            <li className="flex justify-between gap-4">
              <span className="w-1/3 text-sm">Jockey</span>
              <span className="w-2/3 text-sm text-Font_SubColor_1">
                {jockey}
              </span>
            </li>
            <li className="flex justify-between gap-4">
              <span className="w-1/3 text-sm">Weight</span>
              <span className="w-2/3 text-start text-sm text-Font_SubColor_1">
                {weight}
              </span>
            </li>
          </ul>
          <button className="min-mobile-l:px-10 min-w-mobile-l:mr-10 my-4 flex flex-col rounded-md border bg-transparent px-2 py-2 lg:mr-4 lg:px-4 xl:mr-10 xl:px-10">
            <span className="text-sm text-Font_SubColor_1">Margin</span>
            <span className="text-sm text-mainFont">{margin}</span>
          </button>
        </div>
      </div>
      <div className="w-full border-t lg:border-l lg:border-t-0 1440px:w-4/12">
        <Table className="px-4 lg:px-10">
          <TableHeader className="min-w-full px-10">
            <TableRow>
              <TableHead className="px-0 text-sm"></TableHead>
              <TableHead className="px-0 text-sm"></TableHead>
              <TableHead className="px-0 text-sm">STAB</TableHead>
              <TableHead className="px-0 text-sm"></TableHead>
              <TableHead className="px-0 text-sm"></TableHead>
              <TableHead className="px-0 text-sm"></TableHead>
              <TableHead className="px-0 text-sm"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="px-10">
            <TableRow className="border-b-0">
              <TableCell className="!p-2 text-sm"></TableCell>
              <TableCell className="!p-2 text-sm text-Font_SubColor_1">
                W
              </TableCell>
              {/* <TableCell className="text-sm !p-2">{sp}</TableCell> */}
              <TableCell className="!p-2 text-sm">{stab[1].price}</TableCell>
              <TableCell className="!p-2 text-sm"></TableCell>
              <TableCell className="!p-2 text-sm"></TableCell>
              <TableCell className="flex justify-center !p-2 text-sm">
                <button className="flex items-center justify-center gap-1 rounded bg-black px-4 py-2 text-sm font-light text-white">
                  <SquareChevronDown size={20} />
                  Blackbook
                </button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="!p-2 text-sm"></TableCell>
              <TableCell className="text-s !p-2 text-Font_SubColor_1">
                P
              </TableCell>
              <TableCell className="!p-2 text-sm">{stab[0].price}</TableCell>
              <TableCell className="!p-2 text-sm"></TableCell>
              <TableCell className="!p-2 text-sm"></TableCell>
              <TableCell className="!p-2 text-sm"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default FormOverviewRaceCard;
