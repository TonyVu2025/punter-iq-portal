import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cn } from "@/lib/utils";

const THoverCard = HoverCardPrimitive.Root;
const THoverCardTrigger = HoverCardPrimitive.Trigger;

const THoverCardContent = React.forwardRef<
  HTMLDivElement,
  HoverCardPrimitive.HoverCardContentProps
>(({ className, align = "start", sideOffset = 4, ...props }, ref) => {
  const [position, setPosition] = React.useState<Pick<typeof props, 'side'>>({ side: "bottom" });
  const contentRef = React.useRef(null);

  React.useEffect(() => {
    const updatePosition = () => {
      if (contentRef.current) {
        const contentRect = contentRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const side = contentRect.top > windowHeight / 2 ? "top" : "bottom";
        setPosition({ side });
      }
    };

    const resizeObserver = new ResizeObserver(updatePosition);
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    window.addEventListener("resize", updatePosition);

    updatePosition();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <HoverCardPrimitive.Content
      ref={(node) => {
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
        contentRef.current = node;
      }}
      align={align}
      side={position.side}
      sideOffset={sideOffset}
      className={cn(
        "relative z-50 rounded-md bg-popover p-4 text-popover-foreground shadow-lg outline-none",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
      style={{
        filter: "drop-shadow(0px -1px 10px rgba(0,0,0,0.1))",
        marginLeft: "-5rem",
      }}
    >
      {props.children}
      <div
        className={cn(
          "absolute h-0 w-0",
          "border-l-[10px] border-l-transparent",
          "border-r-[10px] border-r-transparent",
          {
            "border-b-[10px] border-b-popover": position.side === "bottom",
            "border-t-[10px] border-t-popover": position.side === "top",
          },
        )}
        style={{
          left: "6rem",
          filter: "drop-shadow(0px -1px 1px rgba(0,0,0,0.1))",
          [position.side === "top" ? "bottom" : "top"]: "-10px",
        }}
      />
    </HoverCardPrimitive.Content>
  );
});

THoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { THoverCard, THoverCardTrigger, THoverCardContent };
