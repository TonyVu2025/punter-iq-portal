import { GetBlackbookSubscriptionsDocument } from "@/gql/graphql";
import { useClientSupabaseQuery } from "@/hooks/useClientSupabaseQuery";
import { useMyProfileStore } from "@/stores/useProfileStore";
import Image from "next/image";

export const BlackbookList = () => {
  const { data: blackbook } = useClientSupabaseQuery(
    ["getBlackbookList"],
    GetBlackbookSubscriptionsDocument,
    {
      user_id: useMyProfileStore.getState().profile.id,
    },
  );
  return (
    <div>
      {blackbook?.black_book_runner_subscriptionsCollection.edges.map(
        (subscription) => (
          <div key={subscription.node.id}>
            <div className="rounded-lg bg-white">
              <div className="px-4 pt-6 lg:px-12">
                {/* Race information */}
                <div className="mt-5 flex flex-wrap items-start justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-4">
                    <Image
                      alt=""
                      src="/img/tipster-avatar.png"
                      height={40}
                      width={40}
                    />

                    <div className="lg:pl-3">
                      <p>{subscription.node.horses.name}</p>
                      <p className="text-Font_SubColor_1 app-text-caption">
                        <b>C:</b> {subscription.node.horses.races || "N/A"}:{" "}
                        {subscription.node.horses.wins || "N/A"} -{" "}
                        {subscription.node.horses.seconds || "N/A"} -{" "}
                        {subscription.node.horses.thirds || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Horse performance description */}
                <div className="mt-6 border-t pt-4">
                  <div className="flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
                    <div className="flex flex-wrap gap-4 lg:flex-nowrap">
                      <p className="-mt-1.5 max-w-[820px] self-center px-4 text-black app-text-body-small">
                        {/* {raceComment.comment} */}
                      </p>
                    </div>

                    <div className="flex max-w-[50%] flex-wrap gap-3 app-text-body-medium"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
};
