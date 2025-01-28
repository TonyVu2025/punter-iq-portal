"use client";

import { Button } from "@/components/ui/button";
import { RaceCard } from "./RaceCard";
import { TripleDotsLoading } from "@/components/ui/TripleDotsLoading";
import { useState } from "react";
import { useBlackbookQuery } from "../hooks/useBlackbookQuery";
import { FormProvider, useForm } from "react-hook-form";

export function UpcomingRaces() {
  const [loading, setLoading] = useState(false);
  const { blackbook } = useBlackbookQuery();
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <div>
        <div className="grid gap-3">
          {blackbook?.map((upcomingRace, index) => (
            <>
              <RaceCard key={index} upcomingRace={upcomingRace} />
              {index % 4 === 0 || index === blackbook.length - 1 ? (
                <>
                  <div className="flex w-[504px] items-center border-l px-6"></div>
                  <div className="relative flex h-0 max-h-[218px] w-full items-center justify-center rounded-lg bg-action_ll1 object-cover pt-[12%]">
                    <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center text-white lg:app-text-h1">
                      Advertisement
                    </div>
                  </div>
                </>
              ) : null}
            </>
          ))}

          <Button
            variant="muted"
            className="mx-auto max-w-[223px] px-8"
            onClick={() => setLoading(true)}
          >
            {loading && <TripleDotsLoading className="mr-1.5" />}
            Load More Data
          </Button>
        </div>
      </div>
    </FormProvider>
  );
}
