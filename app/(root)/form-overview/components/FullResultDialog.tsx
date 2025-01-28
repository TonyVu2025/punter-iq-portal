import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogPortal,
} from "@/components/ui/dialog";
import { BIcon } from "@/components/ui/icons/BIcon";
import { TripleDotsLoading } from "@/components/ui/TripleDotsLoading";
import { cn } from "@/lib/utils";
import { DialogProps } from "@radix-ui/react-dialog";
import styles from "./FullResultDialog.module.scss";

export const FullResultDialog = (props: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogPortal>
        <DialogContent
          contentClassName="px-0"
          className="max-w-[1300px]"
          showCloseIcon={false}
        >
          <DialogHeader className="flex-row justify-between border-b p-4 font-bold app-text-h4">
            R4 Ranvet National apprentice race series
            <DialogClose className="text-Font_SubColor_1">Close</DialogClose>
          </DialogHeader>

          <div className="space-y-3 px-10 py-5">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="rounded-lg border">
                <table className="h-[1px] w-full">
                  <tbody>
                    <tr>
                      <td className="pl-5">
                        <span
                          className={cn(
                            "inline-block h-[30px] w-[30px] rounded border text-center font-bold leading-[30px] text-Sub_Dark_color",
                            index === 0 && "border-none bg-action2 text-white",
                            index === 1 &&
                              "border-none bg-Sub_Dark_color text-white",
                            index === 2 && "border-none bg-action1 text-white",
                          )}
                        >
                          {index + 1}
                        </span>
                      </td>
                      <td>
                        <div className="flex items-center space-x-4 py-3 pl-2 lg:pl-7">
                          <img
                            src="/img/icons/t-shirt-orange.svg"
                            alt="Shirt Icon"
                            className="w-10"
                          />

                          <div>
                            <div>6. Ladbrokes Park Hillside</div>
                            <div className="text-xs text-Sub_Dark_color">
                              T: Wendy Kelly <br />
                              J: Joe Bowditch (58kg)
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-4">T : 01:54.92</td>

                      <td className="w-[320px]">
                        <div className="flex h-full">
                          <table className={styles.childTable}>
                            <tbody>
                              <tr>
                                <th></th>
                                <th>SP</th>
                                <th>S-Tab</th>
                                <th>NSW</th>
                                <th>Ubet</th>
                              </tr>
                              <tr>
                                <td>Win</td>
                                <td>$ 3.30</td>
                                <td>$ 3.40</td>
                                <td>$ 3.40</td>
                                <td>$ 3.40</td>
                              </tr>
                              {index === 0 && (
                                <tr>
                                  <td>Place</td>
                                  <td>-</td>
                                  <td>$ 1.40</td>
                                  <td>$ 1.40</td>
                                  <td>$ 1.40</td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </td>

                      <td className="px-10 text-center">
                        <Button
                          variant="dark"
                          className="h-[35px] w-[35px] p-1.5"
                        >
                          <BIcon></BIcon>
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-7 border-t px-10 pt-5">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="rounded-lg border">
                <table className="h-[1px] w-full">
                  <tbody>
                    <tr>
                      <td className="pl-5">
                        <span
                          className={cn(
                            "inline-block h-[30px] w-[30px] rounded border text-center font-bold leading-[30px] text-Sub_Dark_color",
                          )}
                        >
                          {index + 5}
                        </span>
                      </td>
                      <td>
                        <div className="flex items-center space-x-4 py-3 pl-2 lg:pl-7">
                          <img
                            src="/img/icons/t-shirt-orange.svg"
                            alt="Shirt Icon"
                            className="w-10"
                          />

                          <div>
                            <div>4. Lucas the Younger</div>
                            <div className="text-xs text-Font_SubColor_1">
                              T: Wendy Kelly <br />
                              J: Joe Bowditch (58kg)
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-4">M: 1.2 L</td>

                      <td className="px-10 text-center">
                        <Button
                          variant="dark"
                          className="h-[35px] w-[35px] p-1.5"
                        >
                          <BIcon></BIcon>
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          <div className="mb-5 mt-8 text-center">
            <Button variant="muted" className="w-[200px]">
              <TripleDotsLoading className="mr-5" /> Next Racers
            </Button>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
