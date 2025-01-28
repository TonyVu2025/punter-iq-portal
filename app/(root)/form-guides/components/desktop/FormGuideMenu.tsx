import Link from "next/link";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Dayjs } from "dayjs";
import React, { HTMLAttributes } from "react";
import { getPunterDayJS } from "@/utils/dateUtils";
import { twMerge } from "tailwind-merge";

interface FormGuideMenuProps {
  queryDay?: Dayjs;
  onDayChange?: (day: Dayjs) => void;
}

const DaySelectButton = ({
  className,
  children,
  isActive = false,
  ...props
}: HTMLAttributes<HTMLButtonElement> & { isActive?: boolean }) => {
  return (
    <button
      {...props}
      className={twMerge(
        "flex h-16 items-center justify-center rounded-none px-5 text-base transition-colors duration-200 hover:bg-gray-100 group-hover:bg-gray-100",
        isActive && "text-action1",
        className,
      )}
    >
      {isActive && <span className="mb-0.5 mr-1 text-[1.5em]">•</span>}
      <span>{children}</span>
    </button>
  );
};

const FormGuideMenu: React.FC<FormGuideMenuProps> = ({
  queryDay,
  onDayChange,
}) => {
  const displayDays = Array.from({ length: 4 }, (_, i) =>
    getPunterDayJS().add(i, "day"),
  );

  return (
    <div className="mb-4 flex min-h-16 w-full flex-wrap items-stretch justify-between space-x-0 overflow-visible rounded-lg border-0 bg-white p-0 md:mb-8 md:flex-nowrap">
      <div className="flex flex-1 justify-start">
        <button className="flex h-16 basis-[222px] items-center justify-center rounded-none px-2 transition-colors duration-200">
          <Image
            className="mr-2 md:mr-4"
            src={"/img/hores.png"}
            width={16}
            height={16}
            alt="hores"
          />
          <span className="text-lg font-semibold md:text-xl lg:text-2xl">
            Racings
          </span>
        </button>
        <div className="flex flex-nowrap text-nowrap border-l">
          {displayDays.map((day, index) => (
            <DaySelectButton
              isActive={day.isSame(queryDay, "date")}
              key={index}
              onClick={() => onDayChange?.(day)}
            >
              {index === 0
                ? "Today"
                : index === 1
                  ? "Tomorrow"
                  : day.format("dddd")}
            </DaySelectButton>
          ))}

          <Popover>
            <PopoverTrigger asChild>
              <button className="flex h-16 w-full items-center justify-center rounded-none border-t-0 px-2 text-sm text-mainFont transition-colors duration-200 hover:bg-gray-100 group-hover:bg-gray-100 md:px-4 md:text-base">
                <CalendarDays size={20} />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                fromDate={new Date()}
                onDayClick={(e) => onDayChange(getPunterDayJS(e))}
                mode="single"
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <Link
        href="/form-guides/results"
        className="flex h-16 items-center justify-center rounded-none border-l px-10 text-base transition-colors duration-200 hover:bg-gray-100 group-hover:bg-gray-100"
      >
        Past Results
      </Link>
    </div>
  );
};

export default FormGuideMenu;
