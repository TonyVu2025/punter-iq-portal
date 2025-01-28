import { Clock2, PlayCircleIcon } from "lucide-react";

export const NewsCard = () => {
  return (
    <article className="w-full border-0 shadow-none lg:mb-0">
      <div className="relative">
        <img
          className="w-full object-cover"
          src="/img/guide1.png"
          alt="Race"
          width={290}
          height={156}
        />

        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center text-white">
          <PlayCircleIcon strokeWidth={1} size={48} />
        </div>

        <span className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1 text-Sub_Dark_color app-text-category">
          Contenders
        </span>
      </div>

      <div className="mt-4 flex items-center gap-1 text-xs text-Font_SubColor_1">
        <Clock2 size={10} />3 hours ago
      </div>

      <h2 className="mt-2 leading-tight app-text-h4">
        Golden Sixty trials with sights on a third straight FWD Champions Mile
      </h2>

      <div className="mt-4 text-sm leading-relaxed app-text-body-paragraph">
        Childs has been the stable rider for trainer Grahame Begg for several
        seasons while the jockey has become a &apos;go-to&apos; rider for the
        Gai Waterhouse and Adrian Bott camp in recent times.
      </div>
    </article>
  );
};
