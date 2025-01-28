import NextToGoList from "@/components/NextToGoList";
import TodayList from "@/components/TodayList";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/DrawerSheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useMainStore from "@/stores/mainStore";
import Link from "next/link";
import { CSSProperties, useCallback, useState } from "react";
import VisuallyHidden from "./ui/VisuallyHidden";

export const FormGuidesDrawer = () => {
  const isDrawerOpen = useMainStore((state) => state.isDrawerOpen);
  const setIsDrawerOpen = useMainStore((state) => state.setIsDrawerOpen);
  const [currentTab, setCurrentTab] = useState("next");

  const handleOpenChange = useCallback(
    (open) => {
      if (open !== isDrawerOpen) {
        setIsDrawerOpen(open);
      }
    },
    [isDrawerOpen, setIsDrawerOpen],
  );

  const closeDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, [setIsDrawerOpen]);

  return (
    <Drawer modal={false} open={isDrawerOpen} onOpenChange={handleOpenChange}>
      <DrawerTrigger className="h-full w-full rounded px-3 py-3 text-base md:bg-transparent">
        Form Guides
      </DrawerTrigger>
      <DrawerContent
        side={"left"}
        className="bottom-0 left-[var(--leftToolbarWidth)] top-auto h-[calc(100vh-var(--headerHeight))] w-full overflow-hidden bg-[#F3F6F8]"
        style={
          {
            "--leftToolbarWidth": "64px",
            "--headerHeight": "89px",
          } as CSSProperties
        }
      >
        <VisuallyHidden>
          <DrawerTitle>Form guides menu</DrawerTitle>
          <DrawerDescription>Form guides menu</DrawerDescription>
        </VisuallyHidden>

        <Tabs
          value={currentTab}
          onValueChange={setCurrentTab}
          className="h-full"
        >
          <div className="flex w-full justify-between gap-2 bg-white p-4 text-white">
            <TabsList className="flex w-full gap-2 border-none bg-transparent">
              <TabsTrigger
                value="next"
                onClick={() => setCurrentTab("next")}
                className="w-1/2 rounded-sm bg-SubDark_Color_3 py-2 font-bold text-Sub_Dark_color data-[state=active]:bg-action_ll1 data-[state=active]:text-white"
              >
                Next to Go
              </TabsTrigger>
              <TabsTrigger
                value="today"
                onClick={() => setCurrentTab("today")}
                className="w-1/2 rounded-sm bg-SubDark_Color_3 py-2 font-bold text-Sub_Dark_color data-[state=active]:bg-action_ll1 data-[state=active]:text-white"
              >
                Today
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="next" className="h-full bg-white">
            <div className="h-[calc(100%-160px)] overflow-auto">
              <NextToGoList />
            </div>
          </TabsContent>

          <TabsContent value="today" className="h-full bg-white">
            <div className="h-[calc(100%-160px)] overflow-auto">
              <TodayList />
            </div>
          </TabsContent>
        </Tabs>
        <div className="absolute bottom-0 w-full p-4">
          <Link href={"/form-guides"} onClick={closeDrawer}>
            <button className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 p-4 text-white">
              Get Started. View More
            </button>
          </Link>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default FormGuidesDrawer;
