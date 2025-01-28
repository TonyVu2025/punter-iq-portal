import { SocialFeedAction } from "./SocialFeedAction";
import { CommentSection } from "./CommentSection";
import { SocialFeedHeader } from "./SocialFeedHeader";

export const NormalPost = () => {
  return (
    <div className="bg-white rounded-lg">
      <div className="px-4 lg:px-8">
        <SocialFeedHeader />

        <div className="mt-4 text-sm lg:app-text-body-paragraph">
          We love a good success story at Lastleg®, and boy do we have some to
          share! Whenever a Lastleg® goes bang in a major way, we make them feel
          extra special by dedicating an entire article to them. Although, we
          must warn you.
        </div>

        <div className="mt-4">
          <img src="/img/sample-feed.jpg" alt="" className="w-full" />
        </div>
      </div>
      <SocialFeedAction className="border-t mt-8" />
      <CommentSection />
    </div>
  );
};
