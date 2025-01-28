import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaCaretDown } from "react-icons/fa6";
import { usePastRacesQuery } from "../hooks/usePastRacesQuery";
import PastRace from "./PastRace";
import { TripleDotsLoading } from "@/components/ui/TripleDotsLoading";
type Props = {
  horseId: string;
};

const PastHistoryDropdown = ({ horseId }: Props) => {
  const [shouldLoadRaces, setShouldLoadRaces] = useState(false);
  const { pastRaces, query } = usePastRacesQuery(
    {
      horseId,
    },
    {
      enabled: shouldLoadRaces,
    },
  );
  return (
    <div>
      {/* Race history */}
      <Accordion type="single" collapsible>
        <AccordionItem key="races" value="races" className="border-none">
          <AccordionTrigger
            onMouseOver={() => setShouldLoadRaces(true)}
            iconComponent={
              <FaCaretDown className="mt-1 inline transition-transform" />
            }
            className={`flex w-full justify-normal border-none hover:no-underline`}
          >
            <h4 className="pl-3 pr-3 text-lg font-semibold lg:pl-12">Races</h4>
          </AccordionTrigger>
          <AccordionContent className="max-w-[calc(100vw-32px)] overflow-hidden bg-[#F9FAFB] lg:max-w-none lg:overflow-visible">
            {query.isFetching ? (
              <div className="flex flex-row items-center justify-center p-8">
                <TripleDotsLoading />
              </div>
            ) : pastRaces?.length ? (
              <>
                {pastRaces.map((pastRace) => (
                  <PastRace
                    key={pastRace.race_id}
                    pastRace={pastRace}
                    horseId={horseId}
                  />
                ))}
              </>
            ) : null}
            <div className="h-5 rounded-b-lg border-t bg-white"></div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default PastHistoryDropdown;
