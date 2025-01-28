import { Button } from "@/components/ui/button";
import { SocialFeedAction } from "./SocialFeedAction";
import { CommentSection } from ".";

export const PollPost = () => {
  return (
    <div className="rounded-lg bg-white">
      <Wrapper>
        <h2 className="text-xl font-extrabold lg:text-2xl">
          Ladbrokes Park Hillside, Who Wins?
        </h2>

        <div className="relative mt-6 grid gap-8 lg:grid-cols-2">
          <VoteCard />

          <div className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md bg-action1 font-helveticaNowDisplay text-2xl font-extrabold text-white lg:h-[70px] lg:w-[70px]">
            VS
          </div>

          <VoteCard />
        </div>
      </Wrapper>

      <SocialFeedAction />
      <CommentSection />
    </div>
  );
};

const Wrapper = (props) => {
  return <div className="px-3 py-3 lg:px-8 lg:py-6" {...props}></div>;
};

const StatisticRow = ({ textLeft, textRight }) => {
  return (
    <div className="grid grid-cols-2 justify-between">
      <span className="text-Font_SubColor_1">{textLeft}</span>
      <span>
        <span>{textRight}</span>
      </span>
    </div>
  );
};

const VoteCard = () => {
  return (
    <div className="group rounded-lg border transition-colors hover:border-action_ll1">
      <div className="relative">
        <img alt="" src="/img/guide1.png" />

        <h3 className="text-white">Zabellasareringing</h3>
      </div>

      <div className="w-full space-y-1.5 px-6 text-sm">
        <StatisticRow textLeft="Trainer" textRight="David Blundell" />
        <StatisticRow textLeft="Jockey" textRight="L. Leseberg" />
        <StatisticRow textLeft="Setting" textRight="Back" />
        <StatisticRow textLeft="Last race" textRight="1st Position" />
        <StatisticRow textLeft="Average" textRight="59.91km/h" />
        <StatisticRow textLeft="Avg Time" textRight="72.58 Seconds" />
      </div>

      <svg
        width="189"
        height="50"
        viewBox="0 0 189 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto mt-4 block"
      >
        <path
          d="M2 28.9953C48.5 84.4976 56.5 2 88 2C119.5 2 131 89.5 187 20.5"
          stroke="#7AC143"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <div className="mt-4 border-t px-6 py-6">
        <Button variant="muted" className="w-full group-hover:bg-action_ll1">
          Vote Now
        </Button>
      </div>
    </div>
  );
};
