"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectIcon,
} from "@/components/ui/select";

import Image from "next/image";
import { UpcomingRaces } from "./components/UpcomingRaces";
import { FaCaretDown } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { BlackbookList } from "./components/BlackbookList";

export default function Blackbook() {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="p-3 lg:p-10">
      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex items-center">
          {/* Tipster avatar */}
          <Image
            src="/img/tipster-avatar.png"
            alt="Tipster Avatar"
            width={50}
            height={50}
          />

          <div className="lg:pl-3">
            <h2 className="app-text-h3 lg:app-text-h2">Kane Sherwell</h2>
            <small className="mt-1 block leading-none app-text-caption">
              Member started from 15 April 2023
            </small>
          </div>
        </div>

        <img alt="" src="/img/sample-ads-3.jpg" />
      </div>

      {/* Tabs navigation */}
      <Tabs defaultValue="upcoming" className="mt-4">
        <TabsList className="w-full justify-between border-y">
          <div className="hidden lg:block">
            <TabsTrigger
              className="rounded-none text-Font_SubColor_1 data-[state=active]:text-black"
              value="upcoming"
            >
              Upcoming
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none text-Font_SubColor_1 data-[state=active]:text-black"
              value="results"
            >
              Results
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none text-Font_SubColor_1 data-[state=active]:text-black"
              value="blackbook"
            >
              My Blackbook
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none text-Font_SubColor_1 data-[state=active]:text-black"
              value="alamac"
            >
              Alamac
            </TabsTrigger>
          </div>

          <div className="lg:hidden">
            <Select value={activeTab} onValueChange={setActiveTab}>
              <SelectTrigger className="app-text-small-caption">
                <SelectValue />

                <SelectIcon>
                  <FaCaretDown className="mb-0.5 inline-block align-middle" />
                </SelectIcon>
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="upcoming">
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                </SelectItem>
                <SelectItem value="results">
                  <TabsTrigger value="results">Results</TabsTrigger>
                </SelectItem>
                <SelectItem value="blackbook">
                  <TabsTrigger value="blackbook">My Blackbooks</TabsTrigger>
                </SelectItem>
                <SelectItem value="alamac">
                  <TabsTrigger value="alamac">Alamac</TabsTrigger>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="app-text-small-caption">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="cursor-pointer">
                  Filters your Blackbook{" "}
                  <FaCaretDown className="mb-0.5 inline-block align-middle" />
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuPortal>
                <DropdownMenuContent sideOffset={5}>
                  <DropdownMenuItem>All comments</DropdownMenuItem>
                  <DropdownMenuItem>Most related</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenuPortal>
            </DropdownMenu>
          </div>
        </TabsList>

        {/* Tabs content */}
        <TabsContent value="upcoming" className="mt-6">
          <UpcomingRaces />
        </TabsContent>

        <TabsContent value="results">
          <p>Race updates</p>
        </TabsContent>

        <TabsContent value="blackbook">
          <BlackbookList />
        </TabsContent>

        <TabsContent value="alamac">
          <p>Alamac</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
