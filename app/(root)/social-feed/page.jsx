import { PlayerCell, BetCardWithRows } from "@/components/SocialFeedComponents";
import {
  SidePost,
  SideLiveRanking,
  PollPost,
  NormalPost,
  BetPost,
} from "@/components/SocialFeedComponents/SocialFeedItem";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const MOCK_TABLE_ROW = [
  <PlayerCell key="1" />,
  <td key="2">
    <button className="rounded-lg bg-Font_SubColor_1 px-5 py-2 font-semibold text-white">
      $250
    </button>
  </td>,
  <td key="3" className="pr-7 text-right">
    <button className="rounded-lg bg-Font_SubColor_1 px-5 py-2 font-semibold text-white">
      $250
    </button>
  </td>,
];

const MOCK_TABLE_ROW_2 = [
  <PlayerCell key="1" />,
  <td key="2" width={100}>
    <span className="text-action_ll2">15 Tips</span>
  </td>,
  <td key="3" width={100} className="pr-7 text-right">
    <button className="rounded-lg bg-Font_SubColor_1 px-5 py-2 font-semibold text-white">
      $250
    </button>
  </td>,
];

const MOCK_TABLE_ROW_3 = [
  <PlayerCell key="1" />,
  <td key="2" width={100} className="pr-7 text-right">
    <button className="rounded-lg bg-Font_SubColor_1 px-5 py-2 font-semibold text-white">
      $250
    </button>
  </td>,
];

export default function SocialFeed({ className, ...props }) {
  return (
    <main
      className={cn(
        "mx-auto flex min-h-screen max-w-[1311px] flex-col gap-8 px-4 py-8 lg:flex-row",
        className,
      )}
      {...props}
    >
      <div className="flex-initial lg:hidden lg:w-[290px] xl:block">
        <Card className="p-4">
          <Button className="w-full" variant="purple">
            Share your Thoughts
          </Button>
        </Card>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <Tabs defaultValue="all-post-updates">
          <TabsList>
            <TabsTrigger
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              value="all-post-updates"
            >
              All Post Updates
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              value="race-updates"
            >
              Race Updates
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all-post-updates">
            <div className="grid gap-y-5">
              <NormalPost />
              <BetPost />
              <PollPost />

              <img src="/img/sample-ads.jpg" alt="" />

              <NormalPost />

              <img src="/img/sample-ads-2.jpg" alt="" />
            </div>
          </TabsContent>

          <TabsContent value="race-updates">Race updates</TabsContent>
        </Tabs>

        <div className="mt-5">
          <BetCardWithRows
            headerLeftText={
              <>
                Coffs Harbour - Race 2{" "}
                <span className="font-normal">1400m</span>
              </>
            }
            headerRightText="Most Tipped Horses"
            rows={[MOCK_TABLE_ROW_2, MOCK_TABLE_ROW_2, MOCK_TABLE_ROW_2]}
          />

          <BetCardWithRows
            theads={[
              <th key="1" width={240}></th>,
              <th
                width={110}
                className="py-1 text-left font-normal app-text-category"
                key="2"
              >
                Open
              </th>,
              <th
                width={70}
                className="py-1 text-left font-normal app-text-category"
                key="3"
              >
                Current
              </th>,
            ]}
            headerLeftText={
              <>
                Coffs Harbour - Race 2{" "}
                <span className="font-normal">1400m</span>
              </>
            }
            headerRightText="Favourites"
            headerClassName="bg-gradient-pink-main mt-5"
            rows={[MOCK_TABLE_ROW, MOCK_TABLE_ROW, MOCK_TABLE_ROW]}
          />

          <BetCardWithRows
            theads={[
              <th
                key="1"
                className="text-nowrap px-3 py-2 text-left app-text-h6 lg:px-7"
              >
                Coffs Harbour-Race 2{" "}
                <span className="text-Font_SubColor_1">1400m</span>
              </th>,
              <th key="2"></th>,
            ]}
            headerLeftText="Blocked Last Start"
            headerRightText="Under $5"
            headerClassName="bg-grad_3 mt-5"
            tableClassName="table-auto"
            rows={[MOCK_TABLE_ROW_3]}
          />

          <Button variant="muted" className="mt-5 w-full">
            {" "}
            Load more updates...
          </Button>
        </div>
      </div>
      {/* End main content */}

      <div className="flex-initial lg:w-[290px]">
        <Card className="mb-4 hidden p-4 lg:block xl:hidden">
          <Button className="w-full" variant="purple">
            Share your Thoughts
          </Button>
        </Card>

        <img alt="" src="/img/sample-ads-2.jpg" />

        <div className="mt-5 rounded-lg bg-white p-5">
          <h2 className="app-text-h4">Featured Posts</h2>

          <SidePost className="mt-4 border" />
          <SidePost className="mt-4 border" />
        </div>

        <SideLiveRanking className="mt-5" />
      </div>
    </main>
  );
}
