import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Clock2,
  Ellipsis,
  HeartIcon,
  MessageCircleIcon,
  Repeat2,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { MobileOnly } from "../MobileOnly";

const RaceCard = ({
  image,
  authorName,
  authorImage,
  time,
  content,
  likes,
  comments,
  shares,
}) => {
  return (
    <Card className="w-full border-0 lg:mb-0">
      <div className="relative lg:p-5">
        <img
          className="w-full object-cover"
          src={image}
          alt="Race"
          width={290}
          height={156}
          layout="fill"
        />

        <MobileOnly>
          <Link href="#">
            <i className="absolute right-3 top-3 -rotate-45 rounded-full bg-white p-1">
              <ArrowRight size={14} />
            </i>
          </Link>
        </MobileOnly>
      </div>
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className="h-8 w-8">
              <AvatarImage src={authorImage} alt={authorName} />
              {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
              <AvatarFallback>{authorName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="ml-2">
              <p className="text-base">{authorName}</p>
              <p className="flex items-center gap-1 text-xs text-Font_SubColor_1">
                <Clock2 size={10} />
                {time}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <FaXTwitter size={30} className="text-mainFont" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{content}</p>
      </CardContent>
      <CardFooter className="flex justify-between border-t py-4">
        <div className="flex cursor-pointer items-center">
          <MessageCircleIcon className="mr-1 text-Font_SubColor_1" size={14} />
          <span className="text-xs text-Font_SubColor_1">{comments}</span>
        </div>
        <div className="flex cursor-pointer items-center">
          <HeartIcon className="mr-1 text-Font_SubColor_1" size={14} />
          <span className="text-xs text-Font_SubColor_1">{likes}</span>
        </div>
        <div className="flex cursor-pointer items-center">
          <Repeat2 className="mr-1 text-Font_SubColor_1" size={14} />
          <span className="text-xs text-Font_SubColor_1">{shares}</span>
        </div>
        <div className="flex cursor-pointer items-center">
          <Ellipsis className="mr-1 text-Font_SubColor_1" size={20} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default RaceCard;
